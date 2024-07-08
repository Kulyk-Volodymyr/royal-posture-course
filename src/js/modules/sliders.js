import Swiper from "swiper";
import { Navigation, Pagination, Controller, EffectFade } from "swiper/modules";

export function sliders() {
  const comparisonSlider = new Swiper(".comparison-slider", {
    modules: [Navigation, Pagination],
    navigation: {
      nextEl: ".comparison-swiper-button-next",
      prevEl: ".comparison-swiper-button-prev",
    },
    pagination: {
      el: ".comparison-swiper-pagination",
      type: "bullets",
      dynamicBullets: true,
      //dynamicMainBullets: 1,
      clickable: true,

      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
    loop: true,
    autoHeight: false,
    spaceBetween: 32,
    speed: 800,
    effect: "slide",
    initialSlide: 0,
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });

  let expertInfoSlider = new Swiper(".expert-info-slider", {
    modules: [Navigation, Controller, EffectFade],
    navigation: {
      nextEl: ".expert-info-swiper-button-next",
      prevEl: ".expert-info-swiper-button-prev",
    },
    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
    loop: true,
    autoHeight: false,
    spaceBetween: 32,
    speed: 800,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    initialSlide: 0,
    slidesPerView: 1,
  });

  let expertDetailsSlider = new Swiper(".expert-details-slider", {
    modules: [Controller, EffectFade],
    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
    loop: true,
    autoHeight: false,
    spaceBetween: 32,
    speed: 800,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    initialSlide: 0,
    slidesPerView: 1,
  });

  expertInfoSlider.controller.control = expertDetailsSlider;
  expertDetailsSlider.controller.control = expertInfoSlider;
}
