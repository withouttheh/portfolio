const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export function initScrollNav() {
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
