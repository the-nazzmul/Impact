import { BsFillCalendar2WeekFill, BsClockFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";

const Overlay = () => {
  return (
    <div className="w-full h-full absolute z-20 text-white flex flex-col items-center">
      <h1 className=" text-[56px] text-center mb-8 mt-28">
        Energy Conference 2023: <br /> National and Global Issues <br /> (
        IMPACT )
      </h1>
      <div className="flex gap-2">
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
      <div className="flex gap-9 mt-10">
        <button className="btn bg-[#F34509] border-none rounded-[50px] text-white w-[158px]">
          Details
        </button>
        <button className="btn bg-transparent border-[#F34509] rounded-[50px] text-white w-[158px]">
          Registration
        </button>
      </div>
    </div>
  );
};

export default Overlay;
