const animateBars = () => {
  const html = document.querySelector('#htmlInner')
  const css = document.querySelector('#cssInner')
  const js = document.querySelector('#jsInner')
  const react = document.querySelector('#reactInner')
  const post = document.querySelector('#postInner')

  const container = document.querySelector('.container')

  const animate = () => {
    let width = 0
    let exponent = 0.01

    const draw = setInterval(() => {
      if (width < 90) html.style.width = `${width}%`
      if (width < 90) css.style.width = `${width}%`
      if (width < 70) js.style.width = `${width}%`
      if (width < 50) react.style.width = `${width}%`
      if (width < 40) post.style.width = `${width}%`

      if (exponent < 1) {
        exponent = exponent + 0.003
      }

      width = width + exponent

      if (width >= 100) {
        clearInterval(draw)
        return false
      }
    }, 10)
  }

  const aniStart = () => {
    if (window.scrollY > container.offsetTop) {
      animate()
      window.removeEventListener('scroll', aniStart)
    }
  }

  if (window.innerWidth < 768) {
    window.addEventListener('scroll', aniStart)
  } else {
    animate()
  }
}

animateBars()