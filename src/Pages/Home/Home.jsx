import Banner from "../../Components/Home/Banner/Banner";
import Welcome from "../../Components/Home/Welcome/Welcome";

const Home = () => {
  return (
    <div className="min-h-screen pt-[100px]">
      <Banner></Banner>
      <Welcome></Welcome>
    </div>
  );
};

export default Home;
