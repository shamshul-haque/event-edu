import { GiMicrophone } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { MdEventSeat } from "react-icons/md";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import slider from "../../../assets/slider.png";
import speaker from "../../../assets/speaker.png";

const Slider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        autoplay={true}
        pagination={{ clickable: true }}
        loop
      >
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${slider})`,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="px-4 md:px-8 lg:px-16 py-10 flex items-center justify-between gap-10"
          >
            <div className="flex-1">
              <div className="space-y-5">
                <h2 className="text-6xl font-bold text-white">
                  EVENTS, MEETUPS
                </h2>
                <h2 className="text-6xl font-bold text-black">& CONFERENCES</h2>
              </div>
              <div className="flex gap-10 pt-10">
                <p className="flex items-center gap-2">
                  <MdEventSeat className="text-2xl font-bold text-white" />
                  <span className="font-medium">500 Seats</span>
                </p>
                <p className="flex items-center gap-2">
                  <GiMicrophone className="text-2xl font-bold text-white" />
                  <span className="font-medium">10 Speakers</span>
                </p>
              </div>
              <p className="flex items-center gap-2 pt-5">
                <GoLocation className="text-2xl font-bold text-white" />
                <span className="font-medium">
                  Cultural Centre Road 9, Mirpur DOHS Dhaka 1216, Bangladesh
                </span>
              </p>
              <button className="px-10 py-3 bg-fuchsia-500 hover:bg-transparent hover:border hover: border-white hover:text-black transition-all duration-300 rounded uppercase text-white font-medium mt-10">
                Book Now
              </button>
            </div>
            <div className="flex-1">
              <img src={speaker} alt="speaker" className="w-full" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${slider})`,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="px-4 md:px-8 lg:px-16 py-10 flex items-center justify-between gap-10"
          >
            <div className="flex-1">
              <div className="space-y-5">
                <h2 className="text-6xl font-bold text-white">
                  EVENTS, MEETUPS
                </h2>
                <h2 className="text-6xl font-bold text-black">& CONFERENCES</h2>
              </div>
              <div className="flex gap-10 pt-10">
                <p className="flex items-center gap-2">
                  <MdEventSeat className="text-2xl font-bold text-white" />
                  <span className="font-medium">500 Seats</span>
                </p>
                <p className="flex items-center gap-2">
                  <GiMicrophone className="text-2xl font-bold text-white" />
                  <span className="font-medium">10 Speakers</span>
                </p>
              </div>
              <p className="flex items-center gap-2 pt-5">
                <GoLocation className="text-2xl font-bold text-white" />
                <span className="font-medium">
                  Cultural Centre Road 9, Mirpur DOHS Dhaka 1216, Bangladesh
                </span>
              </p>
              <button className="px-10 py-3 bg-fuchsia-500 hover:bg-transparent hover:border hover: border-white hover:text-black transition-all duration-300 rounded uppercase text-white font-medium mt-10">
                Book Now
              </button>
            </div>
            <div className="flex-1">
              <img src={speaker} alt="speaker" className="w-full" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
