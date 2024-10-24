const callButtons = document.querySelectorAll('.call-icon')
const closeButtons3 = document.querySelectorAll('.close-icon3')
const orderDiv = document.querySelector('.call-order')
const sideMenu = document.querySelector('.side-menu')

function openForm(event) {
  event.stopPropagation()
  orderDiv.classList.add('call-order-active')
  sideMenu.classList.remove('side-menu-active')
}

function closeForm(event) {
  const isCloseButton = Array.from(closeButtons3).includes(event.target)
  const isOutsideForm = !event.target.closest('.call-order__form')

  if (isCloseButton || isOutsideForm) {
    orderDiv.classList.remove('call-order-active')
  }
}

callButtons.forEach((button) => {
  button.onclick = openForm
})

orderDiv.onclick = closeForm

closeButtons3.forEach((button) => {
  button.onclick = closeForm
})
