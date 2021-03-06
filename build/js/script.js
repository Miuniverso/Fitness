"use strict";

var coachSlider = new Swiper(".coachs__swipe-container", {

  navigation: {
    nextEl: ".coachs__btn--next",
    prevEl: ".coachs__btn--prev",
  },

  initialSlide: 1,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1
    },
    // when window width is >= 767px
    767: {
      slidesPerView: 2,
      // spaceBetween: 30,
      slidesPerGroup: 2
    },
    // when window width is >= 1366px
    1366: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    }
  }
});


var commentSlider = new Swiper(".comment__wrapper", {

  navigation: {
    nextEl: ".comment__btn--next",
    prevEl: ".comment__btn--prev",
  },
  // initialSlide: 1,
  centeredSlides: true,
  // spaceBetween: 158
  centeredSlides: true,
  centeredSlidesBounds: true
});
