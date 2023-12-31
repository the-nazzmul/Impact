import { useEffect, useState } from "react";
import SectionHead from "../../SectionHead";
import SpeakerCategory from "./SpeakerCategory";

const Speakers = () => {
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    fetch("./patron.json")
      .then((res) => res.json())
      .then((data) => {
        setSpeakers(data);
      });
  }, []);

  // filterig data according to category
  const chiefPatrion = speakers.filter(
    (speaker) => speaker.role === "chief patron"
  );
  const patron = speakers.filter((speaker) => speaker.role === "patron");
  const conferenceChair = speakers.filter(
    (speaker) => speaker.role === "conference chair"
  );
  const ConferenceSecretary = speakers.filter(
    (speaker) => speaker.role === "conference secretary"
  );
  const advisoryPanel = speakers.filter(
    (speaker) => speaker.role === "advisory panel"
  );

  return (
    <div>
      <div className="mic-bg">
        <div className="text-white">
          {/* section heading */}
          <SectionHead
            heading="Meet Our Fantastic Speakers"
            details="We seek the best speakers from around the world and let them shape the agenda — they're the experts after all."
          ></SectionHead>
        </div>

        {/* Chief Patron */}
        <SpeakerCategory
          speakers={chiefPatrion}
          category="Chief Patrion"
        ></SpeakerCategory>
      </div>

      {/* Patron and Conference Chair */}
      <div className="thunder-bg">
        <SpeakerCategory speakers={patron} category="Patron"></SpeakerCategory>
        <SpeakerCategory
          speakers={conferenceChair}
          category="Conference Chair"
        ></SpeakerCategory>
      </div>

      {/* Secretery and Advisory */}
      <div className="tower-bg pb-24">
        <SpeakerCategory
          speakers={ConferenceSecretary}
          category="Conference Secretary"
        ></SpeakerCategory>
        <SpeakerCategory
          speakers={advisoryPanel}
          category="Advisory Panel"
        ></SpeakerCategory>
      </div>
    </div>
  );
};

export default Speakers;
