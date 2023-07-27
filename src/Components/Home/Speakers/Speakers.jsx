import { useEffect, useState } from "react";
import SectionHead from "../../SectionHead";
import SpeakerCategory from "./SpeakerCategory";

const Speakers = () => {
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    fetch("./FakeData/patron.json")
      .then((res) => res.json())
      .then((data) => {
        setSpeakers(data);
      });
  }, []);

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
          <SectionHead
            heading="Meet Our Fantastic Speakers"
            details="We seek the best speakers from around the world and let them shape the agenda — they're the experts after all."
          ></SectionHead>
        </div>
        <SpeakerCategory
          speakers={chiefPatrion}
          category="Chief Patrion"
        ></SpeakerCategory>
      </div>
      <div className="thunder-bg">
        <SpeakerCategory speakers={patron} category="Patron"></SpeakerCategory>
        <SpeakerCategory
          speakers={conferenceChair}
          category="Conference Chair"
        ></SpeakerCategory>
      </div>
      <div className="tower-bg pb-24">
        <SpeakerCategory speakers={ConferenceSecretary} category="Conference Secretary"></SpeakerCategory>
        <SpeakerCategory
          speakers={advisoryPanel}
          category="Advisory Panel"
        ></SpeakerCategory>
      </div>
    </div>
  );
};

export default Speakers;
