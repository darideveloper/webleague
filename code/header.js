const menu = document.querySelector ('header nav')
const menu_open = document.querySelector ('header button.menu')
const menu_close = document.querySelector ('header button.close')

function show_menu () {
    menu.classList.toggle('collapsed')
}

menu_open.addEventListener ('click', show_menu)
menu_close.addEventListener ('click', show_menu)
