import { useEffect, useState } from "react";
import SpeakerItem from "./SpeakerItem";

const Speakers = () => {
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    const loadSpeakers = async () => {
      const res = await fetch("/speakers.json");
      const data = await res.json();
      setSpeakers(data);
    };
    loadSpeakers();
  }, []);

  return (
    <div className="px-4 md:px-8 lg:px-16">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold">
        Talented Speakers
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
        {speakers.map((speaker) => (
          <SpeakerItem key={speaker.id} speaker={speaker} />
        ))}
      </div>
    </div>
  );
};

export default Speakers;
