import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const images = [
  "images/caraouselpic4.webp",
  "images/caraouselpic6.webp",
  "images/carouselpic1.webp",
  "images/carouselpic2.webp",
  "images/carouselpic5.webp"
];

export default function CarouselSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  return (
    <div className="bg-[#1e293b] py-12 px-4">
      <h2 className="text-2xl font-semibold text-white text-center mb-6">Life at AlphaClasses</h2>
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="rounded-lg w-full h-80 sm:h-[28rem] object-contain  border-gray-600 shadow-lg"

              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
