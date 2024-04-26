import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// style
// import "./styles.css";
// swiper control system
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-[500px]">Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[500px]">Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[500px]">Slide 3</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
