import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import banner from "../../assets/Banner.jpg";
import outlet from "../../assets/Outlet.jpg";
import banner2 from "../../assets/Banner2.jpg";

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
          <div
            style={{ backgroundImage: `url(${banner})` }}
            className="h-[500px]  hero"
          >
            {" "}
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl">
                <h1 className="mb-5 text-5xl font-bold text-black">Welcome <br />
                To
                <br />
                <span className="font-rancho">Safia's</span> <span className="text-base">creative art studio</span>
                </h1>
                <p className="mb-5">
                Safia's creative art studio is a textile base art and craft platform. 
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
            style={{ backgroundImage: `url(${outlet})` }}
            className="h-[500px]  hero"
          >
            {" "}
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl">
                {/* <h1 className="mb-5 text-5xl font-bold text-black">Welcome <br />
                To
                <br />
                <span className="font-rancho">Safia's</span> <span className="text-base">creative art studio</span>
                </h1> */}
                {/* <p className="mb-5">
                Safia's creative art studio is a textile base art and craft platform. 
                </p> */}
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
            style={{ backgroundImage: `url(${banner2})` }}
            className="h-[500px]  hero"
          >
            {" "}
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl">
                {/* <h1 className="mb-5 text-5xl font-bold text-black">Welcome <br />
                To
                <br />
                <span className="font-rancho">Safia's</span> <span className="text-base">creative art studio</span>
                </h1> */}
                {/* <p className="mb-5">
                Safia's creative art studio is a textile base art and craft platform. 
                </p> */}
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
