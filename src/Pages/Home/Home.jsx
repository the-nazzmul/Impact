import Banner from "../../Components/Home/Banner/Banner";
import ConferenceUpdate from "../../Components/Home/Conference Update/ConferenceUpdate";
import Events from "../../Components/Home/Events/Events";
import Speakers from "../../Components/Home/Speakers/Speakers";
import Sponsors from "../../Components/Home/Sponsors/Sponsors";
import Welcome from "../../Components/Home/Welcome/Welcome";

const Home = () => {
  return (
    <div className="min-h-screen pt-[100px]">
      <Banner></Banner>
      <Welcome></Welcome>
      <Events></Events>
      <Speakers></Speakers>
      <ConferenceUpdate></ConferenceUpdate>
      <Sponsors></Sponsors>
    </div>
  );
};

export default Home;
