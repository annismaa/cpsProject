const callButtons = document.querySelectorAll('.call-icon')
const closeButton = document.querySelectorAll('.close-icon_call-order')
const orderDiv = document.querySelector('.call-order')
const sideMenu = document.querySelector('.side-menu')

function openForm(event) {
  event.stopPropagation()
  orderDiv.classList.add('call-order_active')
  sideMenu.classList.remove('side-menu_active')
}

function closeForm(event) {
  if (
    event.target === closeButton ||
    !event.target.closest('.call-order__form')
  )
    orderDiv.classList.remove('call-order_active')
}

callButtons.forEach((button) => {
  button.onclick = openForm
})

orderDiv.onclick = closeForm

closeButton.onclick = closeForm
