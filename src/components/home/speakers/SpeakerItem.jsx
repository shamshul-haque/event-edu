import PropTypes from "prop-types";

const SpeakerItem = ({ speaker }) => {
  const { name, picture, designation } = speaker;
  return (
    <div className="bg-white shadow-lg rounded ">
      <img src={picture} alt={name} className="h-52 w-full rounded" />
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
