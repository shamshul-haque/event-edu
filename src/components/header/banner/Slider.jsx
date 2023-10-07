import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import conferences from "../../../assets/images/conferences.jpg";
import hackathon from "../../../assets/images/hackathon.jpg";

const Slider = () => {
  return (
    <div className="">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        autoplay={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Autoplay]}
      >
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${conferences})`,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="h-screen"
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${hackathon})`,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="h-screen"
          ></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
