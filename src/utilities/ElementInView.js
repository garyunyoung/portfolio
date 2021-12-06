export default function elementInView() {
  if (document.querySelector('#projects') && document.querySelector('#about')) {
    const projects = document.querySelector('#projects')
    const projectsEl = document.querySelector('.navigation-menu__nav-item-link--projects')
    const about = document.querySelector('#about')
    const aboutEl = document.querySelector('.navigation-menu__nav-item-link--about')

    const projectsPos = projects.getBoundingClientRect().top + window.scrollY
    const aboutPos = about.getBoundingClientRect().top + window.scrollY

    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY

      if (scrolled < projectsPos) {
        projectsEl.classList.remove('is-active')
        aboutEl.classList.remove('is-active')

      } else if (scrolled > aboutPos) {
        aboutEl.classList.add('is-active')
        projectsEl.classList.remove('is-active')

      } else {
        projectsEl.classList.add('is-active')
        aboutEl.classList.remove('is-active')
      }
    })

  }
}