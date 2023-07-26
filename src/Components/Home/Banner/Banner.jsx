import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import bannerImg1 from "./../../../assets/Banner1.jpg";
import bannerImg2 from "./../../../assets/Banner2.jpg";
import bannerImg3 from "./../../../assets/Banner3.jpg";
import Overlay from "./Overlay";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={false}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper pt-[100px]"
      >
        <SwiperSlide>
          <div className="relative">
            <div className="w-full h-full bg-black absolute z-10 opacity-[.65]"></div>
            <Overlay></Overlay>
            <img
              src={bannerImg1}
              alt="banner image"
              className=" object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="w-full h-full bg-black absolute z-10 opacity-[.65]"></div>
            <Overlay></Overlay>
            <img
              src={bannerImg2}
              alt="banner image"
              className=" object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="w-full h-full bg-black absolute z-10 opacity-[.65]"></div>
            <Overlay></Overlay>
            <img
              src={bannerImg3}
              alt="banner image"
              className=" object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
