const fullscreen = () => {
  const fullscreenButton = document.querySelector('#fullscreen')
  const element = document.querySelector('.landingWrapper')

  const enterFullscreen = () => {
    element.requestFullscreen()
  }

  fullscreenButton.addEventListener('click', () => enterFullscreen())
}

fullscreen()