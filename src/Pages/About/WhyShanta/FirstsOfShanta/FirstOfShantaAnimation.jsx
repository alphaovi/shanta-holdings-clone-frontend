// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./FirstOfShantaAnimation.css";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const FirstOfShantaAnimation = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2500, // time in milliseconds before transitioning to the next slide
          disableOnInteraction: false, // prevents autoplay from stopping after user interaction
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <p className="text-xl uppercase">
              134 keys international standard hotel project
            </p>
            <img src="https://i.ibb.co.com/CtJk01C/Amari-3-2e16d0ba-fill-481x600-c0-1.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <p className="text-xl uppercase">
              First far complaint building with a parking free ground floor
            </p>
            <img src="https://i.ibb.co.com/CPPzcjL/Chandralok-7-dtkkdkd-2e16d0ba-fill-481x600-c0-1.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <p className="text-xl uppercase">
              An iconic 1.6 million sft, 40- storied commercial development
            </p>
            <img src="https://i.ibb.co.com/0GRWY81/Dhaka-Tower-3-original.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <p className="text-xl uppercase">
              First building with a fully unitized double-glazed curtain
              wall-system
            </p>
            <img src="https://i.ibb.co.com/hygn6Qb/Dhaka-Tower-5-original.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <p className="text-xl uppercase">The first 40 storied skyscrapper of the country</p>
            <img src="https://i.ibb.co.com/BVfbLcf/digonto-4-original.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <p className="text-xl uppercase">
              First true condominium with 150 units
            </p>
            <img src="https://i.ibb.co.com/ZT60hDp/digonto-2-2e16d0ba-fill-481x600-c0-2.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <p className="text-xl uppercase">An iconic 1.6 million sft, 40 storied commercial development</p>
            <img src="https://i.ibb.co.com/HVyRfs0/DT-WS-2e16d0ba-fill-481x600-c0.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <p className="text-xl uppercase">First 25-storied twin towers of the country</p>
            <img src="https://i.ibb.co.com/WybW94F/Forum-WS-2e16d0ba-fill-481x600-c0-2.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <p className="text-xl uppercase">
              First steel and glass high rise structure
            </p>
            <img src="https://i.ibb.co.com/Fmbqxtz/Glasshouse-WS-2e16d0ba-fill-481x600-c0-1.jpg" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default FirstOfShantaAnimation;
