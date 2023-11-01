import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons";
import { useSwiper } from "swiper/react";

const CustomSwiperButtons = () => {
  return (
    <div>
      <button onClick={() => useSwiper().slidePrev()}>
        <span>{React.createElement(BsChevronLeft)}</span>
      </button>
      <button onClick={() => useSwiper().slideNext()}>
        <span>{React.createElement(BsChevronRight)}</span>
      </button>
    </div>
  );
};

export default CustomSwiperButtons;
