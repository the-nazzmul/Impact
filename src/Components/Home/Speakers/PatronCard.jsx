import { TbWorld } from "react-icons/tb";
import { AiFillThunderbolt } from "react-icons/ai";

const PatronCard = ({ patron }) => {
  return (
    <div className="relative patron-card bg-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="157"
        height="368"
        viewBox="0 0 157 368"
        fill="none"
      >
        <path
          d="M146.979 0H66.8085L0 188.842H66.8085L13.3617 368L157 130.737H90.1915L146.979 0Z"
          fill="#D7D7D7"
        />
      </svg>

      <div className="absolute z-10 w-full h-full top-4 flex flex-col items-center">
        <div className=" w-60 rounded-full relative border flex flex-col items-center">
          <img src={patron.image} />
          {patron.chief && (
            <button className="btn btn-xs absolute z-20 -bottom-0 bg-[#179748] border-none text-white rounded-sm">
              <AiFillThunderbolt />
              Chief Patron
            </button>
          )}
        </div>
        <h3 className="text-2xl font-bold">{patron.name}</h3>
        <p className="mb-2">{patron.designation}</p>
        <button className="btn btn-square bg-[#EB9231] text-white rounded-md bottom-0">
          <TbWorld size={32}></TbWorld>
        </button>
      </div>
    </div>
  );
};

export default PatronCard;
