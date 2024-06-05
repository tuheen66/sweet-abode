import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import slider1 from "../assets/images/slide1.jpg";
import slider2 from "../assets/images/slide2.jpg";
import slider3 from "../assets/images/slide3.jpg";
import slider4 from "../assets/images/slide4.jpg";
import slider5 from "../assets/images/slide5.jpg";

const BannerSlider = () => {
  return (
    <div>
      <Swiper
        className="rounded-xl"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img src={slider1} className="w-full h-screen " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} className="w-full h-screen " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} className="w-full h-screen " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} className="w-full h-screen " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} className="w-full h-screen" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
