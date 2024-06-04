import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import swal from "sweetalert";
import { Helmet } from "react-helmet-async";


const UpdateProfile = () => {
  const { user } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  const handleUpdateUser = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(name, photo, email, password);

    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
       
        swal({
          title: "Success!",
          text: "Your profile updated successfully",
          icon: "success",
          button: "oh yes!",
        });
        location.reload();
      })
      .catch();
  };

  return (
    <div className="grid lg:grid-cols-2 w-[90%] mx-auto">
      <Helmet>
        <title>Sweet Abode | Update Profile</title>
      </Helmet>
      <div className="hero min-h-screen bg-[#34ace05d] mb-4 rounded-xl">
        <div className="hero-content flex-col w-full">
          <div className="text-center lg:text-left ">
            <h1 className="text-5xl font-bold">Update Profile</h1>
          </div>
          <div className="  shadow-2xl bg-base-200 w-full rounded-xl">
            <form onSubmit={handleUpdateUser} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  defaultValue={user.displayName}
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
                  defaultValue={user.photoURL}
                  placeholder="photoURL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={user.email}
                  placeholder="email"
                  className="input input-bordered"
                  disabled
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
                <button className="btn bg-[#f0932b] text-white text-xl">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center space-y-8 mb-8">
        <div className="w-48 rounded-lg">
          <img className="rounded-lg" src={user.photoURL} alt="" />
        </div>
        <h2 className="font-bold text-2xl">{user.displayName}</h2>
        <p className="text-xl">{user.email}</p>
      </div>
    </div>
  );
};

export default UpdateProfile;
