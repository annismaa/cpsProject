// import Swiper JS
import Swiper from 'swiper'

import 'swiper/swiper-bundle.css'

import { Pagination } from 'swiper/modules'

function initSwiper() {
  // Вернуть классы как было
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 16,
    slidesPerView: 1.25,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    modules: [Pagination]
  })

  console.log(swiper)
}

if (document.body.clientWidth < 768) {
  initSwiper()
}

// Переменные
// const showButton = document.querySelector('.btn_type_show-more')
// const list = document.querySelector('.swiper-wrapper')
// const showButtonText = document.querySelectorAll('.show')
// const showButtonImage = document.getElementById('arrows')

// function showHide() {
//   list.classList.toggle('swiper-wrapper-hidden')
//   showButtonImage.classList.toggle('arrows-rotated')

//   if (list.classList.contains('swiper-wrapper-hidden'))
//     showButtonText.textContent = 'Показать все'
//   else showButtonText.textContent = 'Скрыть'
// }

// showButton.onclick = showHide

const showButtons = document.querySelectorAll('.btn_type_show-more')
const swiperWrappers = document.querySelectorAll('.swiper-wrapper')

showButtons.forEach((button, index) => {
  button.onclick = () => {
    const swiperWrapper = swiperWrappers[index]
    swiperWrapper.classList.toggle('swiper-wrapper-hidden')
    const showButtonText = button.querySelector('.show')
    const showButtonImage = button.querySelector('img')

    if (swiperWrapper.classList.contains('swiper-wrapper-hidden')) {
      showButtonText.textContent = 'Показать все'
    } else {
      showButtonText.textContent = 'Скрыть'
    }

    showButtonImage.classList.toggle('arrows-rotated')
  }
})
