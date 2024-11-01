const burgerButton = document.querySelector('.burger-icon')
const sideMenu = document.querySelector('.side-menu')
const closeButton = document.getElementById('sidebar-close')
const sidebar = document.querySelector('.sidebar')

function openMenu() {
  sideMenu.classList.add('side-menu_active')
}

function closeMenu(event) {
  if (event.target === closeButton || !event.target.closest('.sidebar'))
    sideMenu.classList.remove('side-menu_active')
}

burgerButton.onclick = openMenu
sideMenu.onclick = closeMenu
closeButton.onclick = closeMenu
