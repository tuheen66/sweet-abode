import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { loginUser, googleSignIn, githubSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSingIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    e.target.reset();

    console.log(email, password);

    // email and password sign in

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero  lg:w-1/2 mx-auto bg-blue-200 mb-4 rounded-xl ">
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
              <span
                onClick={handleGoogleSignIn}
                className="text-green-500 font-bold mx-2 cursor-pointer hover:underline"
              >
                Google
              </span>
              OR
              <span
                onClick={handleGithubSignIn}
                className="text-purple-500 font-bold ml-2 cursor-pointer hover:underline"
              >
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
