import buetlogo from "./../../../assets/BUET_LOGO.png";
import IESD from "./../../../assets/IESD.png";

const OverlayWelcome = () => {
  return (
    <div className=" w-full h-full absolute z-20 text-white flex flex-col items-center">
      <h1 className="text-white pt-[88px] mb-6 text-4xl font-bold">Welcome</h1>
      <p className="text-white w-3/5 mx-auto mb-7 line-clamp-3 overflow-auto ">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
        text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever
      </p>
      {/* bottom cards */}
      <div className="flex justify-center gap-5 pb-24">
        <div className="flex flex-col items-center">
          <img
            className="mb-6"
            height="84px"
            width="84px"
            src={buetlogo}
            alt="buet logo"
          />
          <button className="btn bg-[#179748] border-0 rounded-[50px] text-white">
            Organized by: BUET{" "}
          </button>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="mb-6"
            height="84px"
            width="84px"
            src={IESD}
            alt="buet logo"
          />
          <button className="btn bg-[#179748] border-0 rounded-[50px] text-white">
            Hosted by: IESD
          </button>
        </div>
      </div>
    </div>
  );
};

export default OverlayWelcome;
