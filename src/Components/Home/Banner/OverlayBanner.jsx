import { BsFillCalendar2WeekFill, BsClockFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";

const OverlayBanner = () => {
  return (
    <div className="w-full h-full absolute z-20 text-white flex flex-col items-center justify-center">
      {/* headline */}
      <h1 className="sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl text-center md:mb-4 lg:mb-8 xl:mb-12 font-bold">
        <span className=" italic">
          Energy Conference 2023: <br /> National and Global Issues <br />
        </span>
        ( IMPACT )
      </h1>

      {/* mid-section */}
      <div className="flex gap-2 text-xs sm:text-sm">
        <div className="flex items-center gap-2">
          <button className="rounded-full bg-white p-2">
            <BsFillCalendar2WeekFill className="text-[#F34509]"></BsFillCalendar2WeekFill>
          </button>
          <p>2nd May, 2023</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-full bg-white p-2">
            <BsClockFill className="text-[#F34509]"></BsClockFill>
          </button>
          <p>1:40 PM (GMT+6)</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-full bg-white p-2">
            <MdLocationPin className="text-[#F34509]"></MdLocationPin>
          </button>
          <p>Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* bottom-buttons */}
      <div className="flex gap-2 sm:gap-9 mt-2 sm:mt-10">
        <button className="btn btn-xs md:btn-sm lg:btn-md custom-bg border-none rounded-[50px] text-white w-[158px]">
          Details
        </button>
        <button className="btn btn-xs md:btn-sm lg:btn-md bg-transparent border-[#F34509] rounded-[50px] text-white w-[158px]">
          Registration
        </button>
      </div>
    </div>
  );
};

export default OverlayBanner;
