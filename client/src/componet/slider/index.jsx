import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './index.scss';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
export default function Slide() {
  return (
    <>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        <SwiperSlide>
          <div className="swslide">
            <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl7.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide><div className="swslide">
          <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl1-967x725.jpg" alt="" />
        </div></SwiperSlide>
        <SwiperSlide><div className="swslide">
          <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl4.jpg" alt="" />
        </div></SwiperSlide>
      </Swiper>
    </>
  );
}
