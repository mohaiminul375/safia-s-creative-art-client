import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import banner from "../../assets/Banner.jpg";
import outlet from "../../assets/Outlet.jpg";
import banner2 from "../../assets/Banner2.jpg";
import art1 from "../../assets/art-1.jpeg";
import art2 from "../../assets/art-2.jpeg";
import art3 from "../../assets/art-3.jpg";
import art4 from "../../assets/art-4.jpg";

// swiper control system
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

const Banner = () => {
  return (
    <div className="">
      <Swiper
      loop={true}
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            style={{ backgroundImage: `url(${art4})` }}
            className="h-[400px]  hero"
          >
            {" "}
            <div className=" "></div>
            <div className="hero-content text-center text-neutral-content"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ backgroundImage: `url(${banner})` }}
            className="h-[400px]  hero"
          >
            {" "}
            <div className=" "></div>
            <div className="hero-content text-center text-neutral-content"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ backgroundImage: `url(${art1})` }}
            className="h-[400px]  hero"
          >
            {" "}
            <div className=" "></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl"></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ backgroundImage: `url(${art3})` }}
            className="h-[400px]  hero"
          >
            {" "}
            <div className=" "></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl"></div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
