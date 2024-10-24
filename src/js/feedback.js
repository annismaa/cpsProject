const feedbackButtons = document.querySelectorAll('.chat-icon')
const closeButtons2 = document.querySelectorAll('.close-icon2')
const feedbackDiv = document.querySelector('.feedback')
const sideMenu = document.querySelector('.side-menu')

function openForm(event) {
  event.stopPropagation()
  feedbackDiv.classList.add('feedback-active')
  sideMenu.classList.remove('side-menu-active')
}

function closeForm(event) {
  const isCloseButton = Array.from(closeButtons2).includes(event.target)
  const isOutsideForm = !event.target.closest('.feedback__form')

  if (isCloseButton || isOutsideForm) {
    feedbackDiv.classList.remove('feedback-active')
  }
}

feedbackButtons.forEach((button) => {
  button.onclick = openForm
})

feedbackDiv.onclick = closeForm

closeButtons2.forEach((button) => {
  button.onclick = closeForm
})
