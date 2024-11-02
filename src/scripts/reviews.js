import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/swiper-bundle.css'

const swiper = new Swiper('.reviews__swiper', {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.reviews__btn--next',
    prevEl: '.reviews__btn--prev',
  },
  breakpoints: {
    541: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    745: {
      slidesPerView: 2,
      spaceBetween: 28,
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
  },
})
