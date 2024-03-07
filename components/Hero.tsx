"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Image from 'next/image';

const Hero =  () => {
  return (
    <div className='pt-5'>
            <Swiper
        modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 500, disableOnInteraction: false }}
      speed={4000}
      loop={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="flex items-center justify-center"
    >
      <SwiperSlide>
        < div className="flex items-center justify-center">
            <Image src={"/building.jpg"} alt={"building"} width={1920} height={480} className='rounded-2xl'/>
        </div>
        </SwiperSlide>
      <SwiperSlide>
        < div className="flex items-center justify-center">
            <Image src={"/building2.jpg"} alt={"building2"} width={1920} height={480} className='rounded-2xl'/>
        </div>
        </SwiperSlide>
      <SwiperSlide>
        < div className="flex items-center justify-center">
            <Image src={"/classroom.jpg"} alt={"classroom"} width={1920} height={480} className='rounded-2xl'/>
        </div>
        </SwiperSlide>
      <SwiperSlide>
        < div className="flex items-center justify-center">
            <Image src={"/workplace1.jpg"} alt={"workplace1"} width={1920} height={480} className='rounded-2xl'/>
        </div>
        </SwiperSlide>
      <SwiperSlide>
        < div className="flex items-center justify-center">
            <Image src={"/workplace2.jpg"} alt={"workplace2"} width={1920} height={480} className='rounded-2xl'/>
        </div>
        </SwiperSlide>
    </Swiper>
    </div>
  );
};

export default Hero;