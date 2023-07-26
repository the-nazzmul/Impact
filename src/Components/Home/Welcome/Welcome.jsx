import Overlay from "./Overlay";

const Welcome = () => {
  return (
    <div className="welcome-bg text-center relative">
      <div className="absolute bg-[#080F0D] opacity-80 w-full h-full z-10"></div>
      <Overlay></Overlay>
    </div>
  );
};

export default Welcome;
