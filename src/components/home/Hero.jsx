import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { Link } from "react-router-dom";
import heroBanner from "../../assets/images/hero-banner.png";

const slides = [
  {
    id: 1,
    image: heroBanner,
    text: "Nourish Your Body, Sustain the Earth.",
    subText: "Every bite you take supports a healthier you and a greener planet.",
    linkUrl: "/shop",
  },
  {
    id: 2,
    image: heroBanner,
    text: "Nourish Your Body, Sustain the Earth.",
    subText: "Every bite you take supports a healthier you and a greener planet.",
    linkUrl: "/shop",
  },
  {
    id: 3,
    image: heroBanner,
    text: "Nourish Your Body, Sustain the Earth.",
    subText: "Every bite you take supports a healthier you and a greener planet.",
    linkUrl: "/shop",
  },
  {
    id: 4,
    image: heroBanner,
    text: "Nourish Your Body, Sustain the Earth.",
    subText: "Every bite you take supports a healthier you and a greener planet.",
    linkUrl: "/shop",
  },
];

const Hero = () => {
  return (
    <section className="bg-background">
    <div className="px-6 md:px-16 lg:px-32">
      <Swiper
        className="rounded-[14px] md:rounded-[20px] lg:rounded-[32px]"
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        speed={1500}
        /*autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}*/
        loop
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* Image */}
              <img
                src={slide.image}
                alt={`Hero Banner ${slide.id}`}
                className="w-full h-96 lg:h-auto object-cover"
              />

              {/* Overlay */}
              <div className="w-full h-[100%] absolute top-0 bg-gradient-to-t from-black to-transparent"></div>
              
              <div className="absolute top-[35%] md:top-[25%] lg:top-[45%] left-1/2 -translate-x-1/2 w-full max-w-xl lg:max-w-3xl px-6 text-center text-white flex flex-col items-center gap-3 md:gap-5">
                {/* Text Utama */}
                <h2 className="relative font-barrio text-3xl md:text-5xl lg:text-7xl font-bold tracking-wide drop-shadow-md">
                  {slide.text}
                  {/* Overlay Title */}
                  <span className="absolute top-[15px] lg:top-[30px] left-0 w-[125px] md:w-[200px] lg:w-[310px] h-[13px] md:h-[35px] lg:h-[33px] bg-[#67874e] z-[-1]"></span>
                  <span className="absolute bottom-0 right-0 w-[105px] md:w-[200px] lg:w-[260px] h-[13px] md:h-[35px] lg:h-[33px] bg-[#67874e] z-[-1]"></span>
                </h2>
                
                {/* Sub-text Lebih Kecil */}
                <p className="font-inter text-sm md:text-base lg:text-xl text-gray-200 font-light drop-shadow-sm">
                  {slide.subText}
                </p>
                
                {/* Button Link */}
                <Link
                to={slide.linkUrl}
                className="font-inter mt-2 px-6 py-2.5 md:px-8 md:py-3 bg-background hover:bg-background/90 text-black font-light rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 text-sm md:text-lg lg:text-xl"
                >
                Learn More
                </Link>
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </section>
  );
};

export default Hero;