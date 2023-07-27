import SectionHead from "../../SectionHead";
import ChiefPatron from "./ChiefPatron";

const Speakers = () => {
  return (
    <div className="px-12 lg:px-20 xl:px-32 2xl:px-[310px]">
      <SectionHead
        heading="Meet Our Fantastic Speakers"
        details="We seek the best speakers from around the world and let them shape the agenda — they're the experts after all."
      ></SectionHead>
      <ChiefPatron></ChiefPatron>
    </div>
  );
};

export default Speakers;
