export default function elementInView(setIsInScrollView) {
  const projects = document.querySelector('#projects')
  const about = document.querySelector('#about')

  if (projects && about) {
    const projectsPos = projects.getBoundingClientRect().top + window.scrollY
    const aboutPos = about.getBoundingClientRect().top + window.scrollY

    window.addEventListener('scroll', () => {
      // TO DO: investigate
      const scrolled = window.scrollY + 1

      if (scrolled < projectsPos) {
        setIsInScrollView('home')
      } else if (scrolled > aboutPos) {
        setIsInScrollView('about')
      } else {
        setIsInScrollView('projects')
      }
    })
  }
}