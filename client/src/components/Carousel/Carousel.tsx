import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./Carousel.scss";


const images = ["src/assets/images/img1.png",];


const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay:3000 }}
      loop
      className="carousel"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index} className="carousel__slide">
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            className="carousel__image"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
