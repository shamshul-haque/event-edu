import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-fuchsia-200 mt-10">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-12" />
        <p className="text-3xl font-bold">
          <span className="text-red-500">E</span>vent
          <span className="text-fuchsia-500">E</span>du
        </p>
      </div>
      <div className="flex items-center gap-4">
        <Link to="" className="link-hover">
          About us
        </Link>
        <Link to="#" className="link-hover">
          Contact
        </Link>
        <Link to="#" className="link-hover">
          Jobs
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link to="#">
          <BsFacebook className="text-3xl text-blue-600" />
        </Link>
        <Link to="#">
          <FcGoogle className="text-4xl text-red-500" />
        </Link>
        <Link to="#">
          <BsTwitter className="text-3xl text-blue-600" />
        </Link>
        <Link to="#">
          <BsInstagram className="text-3xl text-red-500" />
        </Link>
        <Link to="#">
          <BsYoutube className="text-4xl text-red-500" />
        </Link>
      </div>
      <p>Copyright © 2023 - All right reserved by Shamshul Haque</p>
    </footer>
  );
};

export default Footer;
