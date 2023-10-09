import Aos from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";
import { useEffect } from "react";

const SpeakerItem = ({ speaker }) => {
  const { name, picture, designation } = speaker;

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="bg-white shadow-lg rounded ">
      <img
        src={picture}
        alt={name}
        className="h-52 w-full rounded"
        data-aos="flip-up"
      />
      <div className="text-center p-5 space-y-2">
        <h1 className="font-bold text-2xl">{name}</h1>
        <p className="">{designation}</p>
      </div>
    </div>
  );
};

SpeakerItem.propTypes = {
  speaker: PropTypes.object,
};

export default SpeakerItem;
