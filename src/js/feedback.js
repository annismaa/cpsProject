const feedbackButtons = document.querySelectorAll('.chat-icon')
const closeButton = document.querySelectorAll('.close-icon_feedback')
const feedbackDiv = document.querySelector('.feedback')
const sideMenu = document.querySelector('.side-menu')

function openForm(event) {
  event.stopPropagation()
  feedbackDiv.classList.add('feedback_active')
  sideMenu.classList.remove('side-menu_active')
}

function closeForm(event) {
  if (event.target === closeButton || !event.target.closest('.feedback__form'))
    feedbackDiv.classList.remove('feedback_active')
}

feedbackButtons.forEach((button) => {
  button.onclick = openForm
})

feedbackDiv.onclick = closeForm

closeButton.onclick = closeForm
