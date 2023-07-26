import { Link } from "react-router-dom";
import logo from "./../../../assets/logo.svg";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiFacebook, FiMail, FiYoutube } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import { GoLocation } from "react-icons/go";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { BsTelephone } from "react-icons/bs";
import pbxIcon from "./../../../assets/pbx.png"

const Footer = () => {
  return (
    <>
      <footer className="footer  text-base-content footer-bg min-h-[439px] relative">
        <div className="bg-[#00110C] w-full h-full absolute opacity-80"></div>
        <div
          id="footer-container"
          className="text-white w-full absolute z-10 p-10 2xl:px-80 xl:py-24 flex flex-col lg:flex-row justify-between"
        >
          {/* 1st */}
          <div>
            <div className="mb-20">
              <Link to="/">
                <div className="flex gap-[13px] items-center">
                  <img src={logo} alt="logo" />
                  <h3 className="uppercase text-[40px]">Impact</h3>
                </div>
              </Link>
            </div>
            <div className="flex flex-col xl:flex-row gap-9">
              <button className="btn bg-[#F34509] border-0 rounded-[50px] text-white hover:text-black hover:scale-110">
                Call for Paper
              </button>
              <button className="btn bg-transparent border-[#F34509] rounded-[50px] text-white w-[158px]">
                Registration
              </button>
            </div>
            <div className="flex gap-7 mt-14">
              <button className="btn btn-outline btn-circle text-white">
                <FiMail size={20}></FiMail>
              </button>
              <button className="btn btn-outline btn-circle text-white">
                <FiFacebook size={20}></FiFacebook>
              </button>
              <button className="btn btn-outline btn-circle text-white">
                <FiYoutube size={20}></FiYoutube>
              </button>
              <button className="btn btn-outline btn-circle text-white">
                <SlSocialLinkedin size={20}></SlSocialLinkedin>
              </button>
            </div>
          </div>
          {/* 2nd */}
          <div>
            <h3 className="font-bold text-white text-2xl mb-6">Useful Links</h3>
            <ul className="flex flex-col gap-3 ">
              <li>
                <TbWorld className="text-[#F34509] inline-block" size={24} />{" "}
                https://encon.iesd.buet.ac.bd
              </li>
              <li>
                <TbWorld className="text-[#F34509] inline-block" size={24} />{" "}
                http://iesd.buet.ac.bd/
              </li>
              <li>
                <TbWorld className="text-[#F34509] inline-block" size={24} />{" "}
                https://www.buet.ac.bd/web/#/
              </li>
            </ul>
          </div>
          {/* 3rd */}
          <div>
            <h3 className="font-bold text-white text-2xl mb-6">Contact</h3>
            <ul className="flex flex-col gap-3 ">
              <li>
                <GoLocation className="text-[#F34509] inline-block" size={18} />{" "}
                ROOM NO: 1107, ECE Building, BUET
              </li>
              <li>
                <TbDeviceLandlinePhone
                  className="text-[#F34509] inline-block"
                  size={18}
                />{" "}
                +880-2-55155190
              </li>
              <li>
                <BsTelephone
                  className="text-[#F34509] inline-block"
                  size={18}
                />{" "}
                019456823636
              </li>
              <li className="flex">
                <img src={pbxIcon} />
                0PABX: +880-2-55666000-02/6303
              </li>
              <li>
                <FiMail className="text-[#F34509] inline-block" size={18} />{" "}
                enconsec.2023@iesd.buet.ac.bd
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <footer className="px-10 py-4 bg-black text-base-content h-[62px]">
        <div className="text-center text-white">
          <h4>Design and Developed by CodersBucket Ltd</h4>
        </div>
      </footer>
    </>
  );
};

export default Footer;