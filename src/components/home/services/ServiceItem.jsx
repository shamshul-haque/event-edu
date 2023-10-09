import Aos from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ServiceItem = ({ service }) => {
  const { id, image, name, short_description, price, button_text } = service;

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="bg-white shadow-lg rounded" data-aos="flip-right">
      <img src={image} alt={name} className="h-52 w-full rounded" />
      <div className="text-center p-5">
        <h1 className="font-bold text-2xl">{name}</h1>
        <p className="pt-3">{short_description}</p>
        <p className="pt-3 text-3xl">{price}</p>
        <Link to={`/serviceDetails/${id}`} className="">
          <button className="px-4 py-2 bg-red-500 hover:bg-transparent hover:border hover: border-red-500 hover:text-black transition-all duration-300 rounded uppercase text-white font-medium mt-4">
            {button_text}
          </button>
        </Link>
      </div>
    </div>
  );
};

ServiceItem.propTypes = {
  service: PropTypes.object,
};

export default ServiceItem;
