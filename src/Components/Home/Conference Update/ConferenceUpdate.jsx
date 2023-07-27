import { useEffect, useState } from "react";
import SectionHead from "../../SectionHead";
import ConferenceCard from "./ConferenceCard";

const ConferenceUpdate = () => {
    const [updates, setUpdates] = useState([])
    useEffect(()=>{
        fetch("./FakeData/update.json").then(res=>res.json()).then(data=>setUpdates(data))
    },[])
  return (
    <div className="px-2 lg:px-20 xl:px-32 2xl:px-[310px] border-none pt-24 tower-bg-white">
      {/* Section heading */}
      <SectionHead
        heading="Conference Update"
        details="The latest thinking, ideas and opinions on digital product from the ENCON23 team and community."
      ></SectionHead>

      {/* update cards */}
      <div className="mt-16 grid grid-col-1 xl:grid-cols-2 gap-6 mb-20">
        {updates.map((update) => (
          <ConferenceCard key={update.id} update={update}></ConferenceCard>
        ))}
      </div>

      {/* bottom buttom */}
      <div className="flex justify-center pb-28">
        <button className="btn rounded-full bg-[#F34509] text-white">All Blogs</button>
      </div>
    </div>
  );
};

export default ConferenceUpdate;
