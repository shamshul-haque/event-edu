import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ServiceItem = ({ service }) => {
  const { id, image, name, short_description, button_text } = service;

  return (
    <div className="bg-white shadow-lg rounded ">
      <img src={image} alt={name} className="h-52 w-full rounded" />
      <div className="text-center p-5">
        <h1 className="font-bold text-2xl">{name}</h1>
        <p className="py-3">{short_description}</p>
        <Link to={`/serviceDetails/${id}`}>
          <button className="px-4 py-2 bg-red-500 hover:bg-transparent hover:border hover: border-red-500 hover:text-black transition-all duration-300 rounded uppercase text-white font-medium">
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
