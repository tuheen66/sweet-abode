import { Link, NavLink } from "react-router-dom";
import icon from "../../public/icon.png";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { logOut } = useContext(AuthContext);

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
          </div>
        </div>
        
        <div>
          <Link to="/login">
            <button className="btn bg-[#f0932b] text-white">Login</button>
          </Link>
          <button onClick={handleSignOut} className="btn bg-[#f0932b] text-white">
          Logout
        </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
