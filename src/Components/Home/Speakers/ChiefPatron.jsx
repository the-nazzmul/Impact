import { useEffect, useState } from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import PatronCard from "./PatronCard";
import SectionHead from "../../SectionHead";

const ChiefPatron = () => {
  const [patrons, setPatrons] = useState([]);

  useEffect(() => {
    fetch("./FakeData/patron.json")
      .then((res) => res.json())
      .then((data) => setPatrons(data));
  }, []);
  return (
    <div className="chief-patron px-12 lg:px-20 xl:px-32 2xl:px-[310px] ">
      <div className="text-white">
        <SectionHead
          heading="Meet Our Fantastic Speakers"
          details="We seek the best speakers from around the world and let them shape the agenda — they're the experts after all."
        ></SectionHead>
      </div>
      <div className="flex gap-2 items-center mb-[65px] text-white">
        <AiFillThunderbolt fill="#EB9231" size={24} />
        <h3 className="text-2xl font-semibold">Chief Patron</h3>
      </div>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-20">
        {patrons.map((patron) => (
          <PatronCard key={patron.id} patron={patron}></PatronCard>
        ))}
      </div>
    </div>
  );
};

export default ChiefPatron;
