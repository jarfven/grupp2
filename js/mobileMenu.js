const mobileMenu = () => {
  const menuButton = document.querySelector('#menuButton')
  const nav = document.querySelector('#nav')
  const menuButtonSvg = '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="18" x2="20" y2="18" />'
  const closeMenuSvg = '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />'

  let menuToggle = false
  let opacity = 0

  const openMenu = () => {
    if (opacity != 1 && opacity != 0) return false

    if (!menuToggle) {
      menuToggle = true
      nav.style.display = 'flex'
      menuButton.style.position = 'fixed'
      menuButton.style.right = '2rem'
      menuButton.innerHTML = closeMenuSvg

      const fadeIn = setInterval(() => {
        opacity = opacity + 0.01
        nav.style.opacity = opacity
        if (opacity > 1) {
          opacity = 1
          clearInterval(fadeIn)
          return false
        }
      }, 10)
    } else {
      menuToggle = false
      menuButton.style.position = 'initial'
      menuButton.style.right = 'initial'
      menuButton.innerHTML = menuButtonSvg

      const fadeOut = setInterval(() => {
        nav.style.opacity = opacity
        opacity = opacity - 0.01
        if (opacity <= 0) {
          opacity = 0
          clearInterval(fadeOut)
          nav.style.display = 'none'
          return false
        }
      }, 10)
    }
  }

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      menuToggle = false
      nav.style.display = 'flex'
      menuButton.style.position = 'initial'
      menuButton.style.right = 'initial'
    } else if (window.innerWidth <= 768 && !menuToggle) {
      nav.style.display = 'none'
      menuButton.innerHTML = menuButtonSvg
    }
  }
  

  window.addEventListener('resize', handleResize)
  menuButton.addEventListener('click', openMenu)
}

mobileMenu()