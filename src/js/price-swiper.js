import Swiper from 'swiper'

import 'swiper/swiper-bundle.css'

import { Pagination } from 'swiper/modules'

function initSwiper() {
  const swiper = new Swiper('.swiper3', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 16,
    slidesPerView: 1.19,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    modules: [Pagination]
  })
}

if (document.body.clientWidth < 768) {
  initSwiper()
}
