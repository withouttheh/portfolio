const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export function initScrollNav() {
  // Desktop nav links
  document.getElementById('projects-link')?.addEventListener('click', () => scrollTo('projects'))
  document.getElementById('contact-link')?.addEventListener('click', () => scrollTo('contact'))

  // Mobile menu buttons (delay to let menu close first)
  const projectsBtn = document.getElementById('projects-btn')
  if (projectsBtn) {
    projectsBtn.addEventListener('click', () => setTimeout(() => scrollTo('projects'), 500))
  }
  const contactBtn = document.getElementById('contact-btn')
  if (contactBtn) {
    contactBtn.addEventListener('click', () => setTimeout(() => scrollTo('contact'), 500))
  }

  // Hero CTA buttons
  document.getElementById('projects-cta')?.addEventListener('click', () => scrollTo('projects'))
  document.getElementById('contact-cta')?.addEventListener('click', () => scrollTo('contact'))
}

export function initBackToTop() {
  const homeBtn = document.getElementById('home-btn')
  const mainEl = document.getElementById('main')
  if (!homeBtn || !mainEl) return

  homeBtn.addEventListener('click', () => scrollTo('home'))

  new IntersectionObserver(
    ([entry]) => homeBtn.classList.toggle('enabled', !entry.isIntersecting),
    { threshold: 0 }
  ).observe(mainEl)
}

export function initFrostedNav() {
  const header = document.getElementById('header')
  if (!header) return

  window.addEventListener(
    'scroll',
    () => header.classList.toggle('scrolled', window.scrollY > 60),
    { passive: true }
  )
}
