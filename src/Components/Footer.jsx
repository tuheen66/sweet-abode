import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../../public/icon.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-green-200 text-black ">
        <aside>
          <img src={logo} alt="" />
          <p className="">
            <span className="text-2xl font-bold text-gray-800">
              Sweet Abode Real Estate Ltd{" "}
            </span>
            <br />
            Providing reliable since 2000
          </p>
          <p>Copyright © 2024 - All right reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4 text-3xl">
            <FaFacebookF className="text-blue-600" />{" "}
            <FaYoutube className="text-red-800" />
            <FaTwitter className="text-blue-800" />
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
