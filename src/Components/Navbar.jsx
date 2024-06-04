import { Link, NavLink } from "react-router-dom";
import icon from "../../public/icon.png";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleSignOut = () => {
    logOut()
      .then(() => console.log("logged out successfully"))
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between items-center w-[90%] mx-auto bg-green-200 shadow-xl mb-4 rounded-lg px-4">
        <img className="w-32" src={icon} alt="" />
        <div>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <NavLink to="/">Home</NavLink>

            <NavLink to="/update-profile">Update Profile</NavLink>
            <NavLink to="/exclusives">Exclusive Houses</NavLink>
          </div>
        </div>

        <div>
          {user ? (
            // setting username on hover of user image
            <div className="flex items-center gap-4">
              <div className=" relative group">
                <img className="w-14 rounded-full  " src={user.photoURL} />

                <p className="opacity-0 group-hover:opacity-100 absolute  right-14 flex items-center bottom-0 text-xl bg-gray-200 p-2 text-black font-semibold">
                  {user.email}
                </p>
              </div>

              <button
                onClick={handleSignOut}
                className="btn bg-[#f0932b] text-white"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn bg-[#f0932b] text-white">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
