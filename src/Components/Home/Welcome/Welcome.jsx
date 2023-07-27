import OverlayWelcome from "./OverlayWelcome";


const Welcome = () => {
  return (
    <div className="welcome-bg text-center relative">
      <div className="absolute bg-[#080F0D] opacity-80 w-full h-full z-10"></div>
      <OverlayWelcome></OverlayWelcome>
    </div>
  );
};

export default Welcome;
