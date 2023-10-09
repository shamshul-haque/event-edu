import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <footer
      className="px-4 md:px-8 lg:px-16 py-10 mt-10 bg-fuchsia-200"
      data-aos="zoom-in"
    >
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <div className="space-y-3">
          <div className="flex items-center">
            <img src={logo} alt="logo" className="w-12" />
            <p className="text-3xl font-bold">
              <span className="text-red-500">E</span>vent
              <span className="text-fuchsia-500">E</span>du
            </p>
          </div>
          <div>
            <p className="font-bold">Email:</p>
            <Link to="#">shamshul.haque.dev@gmail.com</Link>
          </div>
          <div>
            <p className="font-bold">Address:</p>
            <p>
              Cultural Centre <br /> Road 9, Mirpur DOHS <br /> Dhaka 1216,
              Bangladesh
            </p>
          </div>
        </div>
        <div className="md:mt-10 space-y-3">
          <p className="font-bold">Connect With Us:</p>
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
          <p className="md:pt-16">Copyright © 2023 - All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
