import PropTypes from "prop-types";

const Facility = ({ facility }) => {
  return (
    <div>
      <li className="ml-10">{facility}</li>
    </div>
  );
};

Facility.propTypes = {
  facility: PropTypes.string,
};

export default Facility;
