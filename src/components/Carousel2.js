// import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";

// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules. In this example,
// we will use Pagination and Coverflow
import SwiperCore, { Pagination, Mousewheel } from "swiper";

// configure Swiper to use modules
SwiperCore.use([Pagination, Mousewheel]);

const Carousel2 = (props) => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Swiper
        direction={"vertical"}
        mousewheel={{
          invert: true,
          forceToAxis: true,
          sensitivity: 3,
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        style={{ background: "green", minHeight: "100vh" }}
      >
        <SwiperSlide>
          <div>Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>Slide 3</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>Slide 4</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>Slide 5</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>Slide 6</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>Slide 7</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>Slide 8</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>Slide 9</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel2;
