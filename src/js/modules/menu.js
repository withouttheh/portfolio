export function initMenu() {
  const menuBtn = document.getElementById('burger')
  const menu = document.getElementById('menu')
  if (!menuBtn || !menu) return

  let showMenu = false

  const toggleMenu = () => {
    showMenu = !showMenu
    menuBtn.classList.toggle('open', showMenu)
    menu.classList.toggle('show', showMenu)
    menuBtn.setAttribute('aria-expanded', String(showMenu))
  }

  ;[menuBtn, menu].forEach((el) => el.addEventListener('click', toggleMenu))
}
