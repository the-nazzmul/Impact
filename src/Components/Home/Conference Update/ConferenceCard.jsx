import { Link } from "react-router-dom";

const ConferenceCard = ({ update }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center bg-slate-400 p-4 rounded-md dotted-bg-gray hover:scale-105 duration-300 transition shadow-md">
      {/* Card left */}
      <div className="md:shrink-0 h-full relative mb-8 md:mb-0 py-8">
        {/* card image */}
        <div className="h-full flex items-center pt-16">
          <img className="max-w-xs" src={update.image} alt="" />
        </div>

        {/* date and time */}
        <div className="flex flex-col items-start justify-center text-white p-3 custom-bg w-20 h-20 absolute z-10 top-4 md:top-4 md:-right-6 hover:scale-110 duration-300 transition">
          <small>{update.date}</small>
          <small>{update.time}</small>
        </div>

        {/* type of conference */}
        <div className="absolute z-10 bottom-0 hidden md:block">
          {update.type.map((type, index) => (
            <div
              className="badge badge-outline border-[#F34509] text-[#F34509] mr-2 hover:scale-105 duration-300 transition cursor-pointer"
              key={index}
            >
              {type}
            </div>
          ))}
        </div>
      </div>

      {/* card right */}
      <div className="md:pl-10 break-all">
        <h3 className="font-bold text-2xl mb-5">{update.title}</h3>
        <p className="mb-4 text-xs">
          {update.description.split("").slice(0, 200).join("")}...
        </p>
        <Link className="font-bold">Read More...</Link>
      </div>
    </div>
  );
};

export default ConferenceCard;
