import { Link } from "react-router-dom";

const ConferenceCard = ({ update }) => {
  return (
    <div className="flex items-center bg-slate-400 p-4 rounded-md dotted-bg-gray">
      <div className="shrink-0 h-full relative">
        <div className="h-full flex items-center">
          <img className="max-w-[328px]" src={update.image} alt="" />
        </div>
        <div className="flex flex-col items-start justify-center text-white p-1 bg-[#F34509] w-20 h-20 absolute z-10 top-2 -right-10">
          <small>{update.date}</small>
          <small>{update.time}</small>
        </div>
        <div className="absolute z-10 bottom-0">
          {update.type.map((type, index) => (
            <div
              className="badge badge-outline border-[#F34509] text-[#F34509] mr-2"
              key={index}
            >
              {type}
            </div>
          ))}
        </div>
      </div>
      <div className="pl-10 break-all">
        <h3 className="font-bold text-2xl mb-5">{update.title}</h3>
        <p className="mb-4">
          {update.description.split("").slice(0, 200).join("")}...
        </p>
        <Link className="font-bold">Read More...</Link>
      </div>
    </div>
  );
};

export default ConferenceCard;
