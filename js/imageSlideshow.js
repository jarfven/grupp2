const imageCarousel = () => {
  const slideshow = document.querySelector('.landingWrapper')
  const playButton = document.querySelector('#play')
  const pauseButton = document.querySelector('#pause')
  const loadingBar = document.querySelector('#bar')
  const imageSelector = document.querySelector('#imageSelector')
  const imageArray = ['./images/bg1.png', './images/bg2.png', './images/bg3.png', './images/bg4.png']
  let imageIndex = 0
  let loadingBarProgress = 0
  let slideshowInterval

  slideshow.style.background = `url(${imageArray[imageIndex]}) center center / cover no-repeat fixed`
  playButton.style.display = 'none'
  
  for (i = 0; i < imageArray.length; i++) {
    const e = document.createElement('input')
          e.type = 'radio'
          e.name = 'imageSelector'
          e.id = i

    if (i === 0) e.checked = 'true'
    
    e.addEventListener('click', () => slideshowUpdate(e))
    
    imageSelector.append(e)
  }

  const slideshowStart = () => {
    playButton.style.display = 'none'
    pauseButton.style.display = 'block'

    slideshowInterval = setInterval(() => {
      loadingBarProgress = loadingBarProgress + 0.2
      
      if (loadingBarProgress > 100) {
        loadingBarProgress = 0
        imageIndex++
  
        slideshowUpdate()
      }
      
      loadingBar.style.width = `${loadingBarProgress}%`
    }, (10))
  }

  const slideshowPause = (stopLoadingBar) => {
    playButton.style.display = 'block'
    pauseButton.style.display = 'none'

    clearInterval(slideshowInterval)
    slideshowInterval = null

    if (stopLoadingBar) loadingBarProgress = 0
  }

  const slideshowUpdate = (e) => {
    if (imageIndex >= imageArray.length) imageIndex = 0

    if (e) {
      e.checked = true
      imageIndex = e.id
      slideshowPause(true)
      slideshowStart()
    } else {
      imageSelector.childNodes[imageIndex].checked = true
    }
    slideshow.style.background = `url(${imageArray[imageIndex]}) center center / cover no-repeat fixed`
  }

  playButton.addEventListener('click', () => slideshowStart())
  pauseButton.addEventListener('click', () => slideshowPause())

  slideshowStart()
}

imageCarousel()