const readButton = document.querySelector('.button_read-more')
const mainText = document.querySelector('.main-page__text')

function readMore() {
  mainText.classList.toggle('main-page__text_active')
  const readButtonText = readButton.querySelector('.read')
  const readButtonImage = readButton.querySelector('img')
  console.log('click')

  if (mainText.classList.contains('main-page__text_active')) {
    readButtonText.textContent = 'Скрыть'
  } else {
    readButtonText.textContent = 'Показать всё'
  }

  readButtonImage.classList.toggle('arrows_rotated')
}

readButton.onclick = readMore
