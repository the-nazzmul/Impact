import SectionHead from "../../SectionHead";
import img from "./../../../assets/event-pic.jpg";
import TopSecForSmall from "./TopSecForSmall";
import TopSection from "./TopSection";

const Events = () => {
  return (
    <>
      <div className="dotted-bg-white pb-24">
        <SectionHead
          heading="Our Events"
          details="Since 2010, we’ve been welcoming product people to join us in Dhaka, Bangladesh for a day of insights and stories from some of the brightest minds in digital product"
        ></SectionHead>
      </div>
      {/* top section */}
      <div className="my-2 hidden md:block">
        <TopSection></TopSection>
      </div>
      <div className="md:hidden">
        <TopSecForSmall></TopSecForSmall>
      </div>
      {/* bottom section */}
      <div className="grid grid-cols-1 lg:gap-0 xl:grid-cols-2">
        <div>
          <img src={img} alt="event photo" />
        </div>
        <div className="event-bg text-white flex items-center">
          <div className="pl-12 xl:pl-32 my-12">
            <h1 className="text-4xl font-bold 2xl:w-1/2 mb-6">
              The Future of Currencies
            </h1>
            <p className="xl:w-3/4 mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <button className="btn bg-[#F34509] border-0 rounded-[50px] text-white hover:text-black hover:scale-110">
              Registration
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
