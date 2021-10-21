import "./carousel1.css";

// import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";

// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules. In this example,
// we will use Pagination and Coverflow
import SwiperCore, { Pagination, EffectCoverflow } from "swiper";

// configure Swiper to use modules
SwiperCore.use([Pagination, EffectCoverflow]);

const Carousel1 = (props) => {
  return (
    <div className="photo-container">
      <Swiper
        effect="coverflow"
        grabCursor="true"
        centeredSlides="true"
        spaceBetween={0}
        slidesPerView={4}
        loop="true"
        pagination={{ clickable: true, dynamicBullets: true }}
        coverflowEffect={{
          rotate: 20,
          stretch: 25,
          depth: 250,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
          700: {
            spaceBetween: 0,
            slidesPerView: 4,
          },
          500: {
            spaceBetween: 100,
            slidesPerView: 2,
          },
          411: {
            spaceBetween: 100,
            slidesPerView: 2,
          },
          300: {
            spaceBetween: 0,
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide>
          <img
            src={"https://source.unsplash.com/random"}
            alt="pic1"
            className="photos"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={"https://source.unsplash.com/random"}
            alt="pic2"
            className="photos"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={"https://source.unsplash.com/random"}
            alt="pic3"
            className="photos"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={"https://source.unsplash.com/random"}
            alt="pic4"
            className="photos"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={"https://source.unsplash.com/random"}
            alt="pic5"
            className="photos"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel1;
