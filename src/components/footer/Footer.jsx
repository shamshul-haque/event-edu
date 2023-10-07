import {
  BsFacebook,
  BsGoogle,
  BsInstagram,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-fuchsia-200 mt-10">
      <div className="grid grid-flow-col gap-4">
        <Link to="" className="link link-hover">
          About us
        </Link>
        <Link to="#" className="link link-hover">
          Contact
        </Link>
        <Link to="#" className="link link-hover">
          Jobs
        </Link>
      </div>
      <div className="grid grid-flow-col gap-4">
        <Link to="#">
          <BsFacebook className="text-2xl" />
        </Link>
        <Link to="#">
          <BsGoogle className="text-2xl" />
        </Link>
        <Link to="#">
          <BsTwitter className="text-2xl" />
        </Link>
        <Link to="#">
          <BsInstagram className="text-2xl" />
        </Link>
        <Link to="#">
          <BsYoutube className="text-2xl" />
        </Link>
      </div>
      <p>Copyright © 2023 - All right reserved by Shamshul Haque</p>
    </footer>
  );
};

export default Footer;
