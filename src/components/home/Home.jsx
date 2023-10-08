import Slider from "../header/banner/Slider";
import Services from "./services/Services";
import Speakers from "./speakers/Speakers";
import UpcomingEvent from "./upcomingEvent/upcomingEvent";

const Home = () => {
  return (
    <div>
      <Slider />
      <Services />
      <UpcomingEvent />
      <Speakers />
    </div>
  );
};

export default Home;
