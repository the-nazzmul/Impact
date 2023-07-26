import Banner from "../../Components/Home/Banner/Banner";
import Events from "../../Components/Home/Events/Events";
import Sponsors from "../../Components/Home/Sponsors/Sponsors";
import Welcome from "../../Components/Home/Welcome/Welcome";

const Home = () => {
  return (
    <div className="min-h-screen pt-[100px]">
      <Banner></Banner>
      <Welcome></Welcome>
      <Events></Events>
      <Sponsors></Sponsors>
    </div>
  );
};

export default Home;
