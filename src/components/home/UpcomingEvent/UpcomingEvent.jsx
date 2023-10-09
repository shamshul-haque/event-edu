import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import jonathon from "../../../assets/jonathon.png";

const UpcomingEvent = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="px-4 md:px-8 lg:px-16 py-10" data-aos="fade-down">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold">
        Upcoming Event
      </h1>
      <div className="border border-red-500 rounded mt-6 flex flex-col lg:flex-row gap-5">
        <div className="w-full lg:w-[40%] bg-red-500" data-aos="flip-left">
          <h2 className="text-center text-3xl font-bold pt-5">14th Oct 2023</h2>
          <p className="uppercase font-bold text-center">10.00 am - 3.00 pm</p>
          <div className="flex justify-between">
            <img src={jonathon} alt="jonathon" className="w-24 md:w-48 h-3/4" />
            <div className="text-white flex flex-col items-end justify-center p-3">
              <h3 className="text-xl md:text-3xl font-bold">
                Jonathon Trought
              </h3>
              <p>Panel Moderator</p>
            </div>
          </div>
        </div>
        <div className="p-5 md:p-10" data-aos="flip-right">
          <h2 className="font-bold text-2xl text-red-500">Career Fairs</h2>
          <p className="ml-5 text-justify">
            Explore job opportunities and network with top employers at our
            career fairs.
          </p>
          <div className="pt-5">
            <h2 className="text-2xl font-bold text-red-500">Topic:</h2>
            <ul>
              <li className="list-disc ml-10">UI/UX Design</li>
              <li className="list-disc ml-10">Web Design and Development</li>
              <li className="list-disc ml-10">App Development</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;
