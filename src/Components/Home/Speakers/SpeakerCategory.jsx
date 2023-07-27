import { AiFillThunderbolt } from "react-icons/ai";
import PatronCard from "./PatronCard";
// import SectionHead from "../../SectionHead";

const SpeakerCategory = ({ speakers, category }) => {

  return (
    <div className="px-12 lg:px-20 xl:px-32 2xl:px-[310px] border-none pt-24">
      {/* category heading */}
      <div className="flex gap-2 items-center mb-[65px] text-white">
        <AiFillThunderbolt fill="#EB9231" size={24} />
        <h3 className="text-2xl font-semibold">{category}</h3>
      </div>

      {/* Speakers */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-20">
        {speakers.map((speaker) => (
          <PatronCard key={speaker.id} speaker={speaker}></PatronCard>
        ))}
      </div>
    </div>
  );
};

export default SpeakerCategory;
