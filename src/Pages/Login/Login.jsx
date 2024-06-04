import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);

  const handleSingIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero min-h-screen  lg:w-1/2 mx-auto bg-blue-200 mb-4 rounded-xl ">
      <div className="hero-content flex-col w-full">
        <div className="text-center lg:text-left ">
          <h1 className="text-5xl font-bold animate__animated animate__rubberBand">
            Login now!
          </h1>
        </div>
        <div className="  shadow-2xl bg-base-200 w-full rounded-xl ">
          <form onSubmit={handleSingIn} className="card-body">
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
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-[#f0932b] text-white text-lg">
                Login
              </button>
            </div>
          </form>

          <div className=" text-center">
            <p>
              Login with
              <span className="text-green-500 font-bold mx-2 cursor-pointer hover:underline">
                Google
              </span>
              OR
              <span className="text-purple-500 font-bold ml-2 cursor-pointer hover:underline">
                Github
              </span>
            </p>
          </div>

          <div className="pb-8 mt-4 text-center">
            <p>
              New here? Please
              <Link
                className="text-blue-500 font-bold hover:underline ml-2"
                to="/register"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
