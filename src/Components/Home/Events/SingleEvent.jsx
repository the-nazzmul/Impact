import { BsFillCalendar2WeekFill } from "react-icons/bs";

const SingleEvent = ({ event }) => {
  return (
    <div className="relative">
      <img src={event.image_url} alt="event picture" />
      {/* bottom texts */}
      <div className="absolute z-10 bottom-0 text-white bg-gradient-to-b from-transparent via-10% via-black via-20% to-black opacity-[.80] px-2 pt-4 pb-2 w-full">
        <h3 className="font-bold">{event.name}</h3>
        <p className="text-xs hidden lg:block">{event.description}</p>
      </div>
      {/* top buttons */}
      <div className="absolute z-20 right-0 top-2">
        <button className="btn btn-xs rounded-sm bg-[#F34509] border-none text-white font-light block mb-2 ml-auto">
          <BsFillCalendar2WeekFill className="hidden lg:inline" />
          {event.date}
        </button>
        <button className="btn btn-xs rounded-sm bg-[#F34509] border-none text-white font-light md:block mb-2 ml-auto hidden">
          <BsFillCalendar2WeekFill className="hidden lg:inline" />
          {event.time}
        </button>
      </div>
    </div>
  );
};

export default SingleEvent;
