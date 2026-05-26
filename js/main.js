import { initForm } from './form.js'

function initMenu() {
  const menuBtn = document.getElementById('burger')
  const menu = document.getElementById('menu')
  if (!menuBtn || !menu) return

  let showMenu = false

  const toggleMenu = () => {
    showMenu = !showMenu
    menuBtn.classList.toggle('open', showMenu)
    menu.classList.toggle('show', showMenu)
  }

  ;[menuBtn, menu].forEach((el) => el.addEventListener('click', toggleMenu))
}

function initScrollNav() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const projectsBtn = document.getElementById('projects-btn')
  const projectsLink = document.getElementById('projects-link')
  if (projectsBtn) {
    projectsBtn.addEventListener('click', () => setTimeout(() => scrollTo('projects'), 500))
    projectsLink.addEventListener('click', () => scrollTo('projects'))
  }

  const contactBtn = document.getElementById('contact-btn')
  const contactLink = document.getElementById('contact-link')
  if (contactBtn) {
    contactBtn.addEventListener('click', () => setTimeout(() => scrollTo('contact'), 500))
    contactLink.addEventListener('click', () => scrollTo('contact'))
  }
}

function initBackToTop() {
  const homeBtn = document.getElementById('home-btn')
  const mainEl = document.getElementById('main')
  if (!homeBtn || !mainEl) return

  homeBtn.addEventListener('click', () =>
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
  )

  new IntersectionObserver(
    ([entry]) => homeBtn.classList.toggle('enabled', !entry.isIntersecting),
    { threshold: 0 }
  ).observe(mainEl)
}

function initModal() {
  const modal = document.getElementById('modal')
  if (!modal) return

  document.getElementById('form-link')?.addEventListener('click', () =>
    modal.classList.add('open-modal')
  )
  document.getElementById('close-modal')?.addEventListener('click', () =>
    modal.classList.remove('open-modal')
  )
}

function initYear() {
  const yearEl = document.getElementById('year')
  if (yearEl) yearEl.textContent = new Date().getFullYear()
}

initMenu()
initScrollNav()
initBackToTop()
initModal()
initForm()
initYear()
