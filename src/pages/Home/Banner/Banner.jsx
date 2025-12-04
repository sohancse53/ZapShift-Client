import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner1 from '../../../assets/banner/banner1.png'
import banner2 from '../../../assets/banner/banner2.png'
import banner3 from '../../../assets/banner/banner3.png'
import { FaArrowCircleRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="relative w-full">

      {/* Buttons (only once) */}
      <div className="hidden  absolute z-20 bottom-20 left-20  sm:flex gap-4">
        <button className="btn btn-primary rounded-full text-secondary">
          Track Your Parcel <FaArrowCircleRight/>
        </button>
        <button className="btn btn-outline rounded-xl text-secondary">
          Be A Rider
        </button>
      </div>

      {/* Slider */}
      <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
        showStatus={false}
        showThumbs={false}
        showIndicators={true}
        swipeable
        emulateTouch
      >
        <div><img src={banner1} alt="" /></div>
        <div><img src={banner2} alt="" /></div>
        <div><img src={banner3} alt="" /></div>
      </Carousel>
    </div>
  );
};

export default Banner;
