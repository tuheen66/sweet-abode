import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import "animate.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import swal from "sweetalert";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const location = useLocation();

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    e.target.reset();

    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6}$/.test(password)) {
      swal({
        title: " Oops!",
        text: " Your password must contain one Uppercase letter, one lowercase letter and should be at least 6 characters long",
        icon: "error",
        button: "oh no!",
      });
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        swal({
          title: "Success!",
          text: "Your registration is successful",
          icon: "success",
          button: "oh yes!",
        });

        navigate(location?.state ? location.state : "/");

        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => console.log("Profile Updated"))
          .catch();
      })
      .catch((error) => console.error(error));

    console.log(name, email, password, photo, password);
  };

  return (
    <div className="hero min-h-screen  lg:w-1/2 mx-auto bg-[#34ace05d] mb-4 rounded-xl">
      <Helmet>
        <title>Sweet Abode | Register</title>
      </Helmet>
      <div className="hero-content flex-col w-full ">
        <div className="text-center lg:text-left ">
          <h1 className="text-5xl font-bold animate__animated animate__jello">
            Please Register
          </h1>
        </div>
        <div className="  shadow-2xl bg-base-200 w-full rounded-xl">
          <form onSubmit={handleRegister} className="card-body py-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photoURL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-12"
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </span>
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-[#f0932b] text-white text-lg">
                Register
              </button>
            </div>
          </form>

          <div className="pb-8 text-center">
            <p>
              Already have an account? Please{" "}
              <Link className="text-blue-500 font-bold" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
