//Delays för när fadein ska ske
setTimeout( fadeAnimation(".imgWrapper"), 100);
setTimeout(fadeAnimation(".socialWrapper"), 300);
setTimeout(fadeAnimation(".bioWrapper"), 500);
setTimeout(fadeAnimation(".skillWrapper"), 700);

//Fadeinfunktion

function fadeAnimation(querySelector) {
  let id = null;
  const elem = document.querySelector(querySelector);
  const opacityObject = window.getComputedStyle(elem);
  let opacityValue = opacityObject.getPropertyValue('opacity') 

  let animateOpacity = 0;
  clearInterval(id);
  id = setInterval(frame, 10);

  function frame() {
    if (opacityObject.getPropertyValue('opacity') == 1) {
      clearInterval(id);
    } else {
      animateOpacity = animateOpacity + 0.02;
      elem.style.opacity = animateOpacity;
    }
  }
}

//Bildspelsanimering
const images = document.querySelectorAll(".slideImg");

let i = 0;

setInterval(function () {
  if (i == 0) {
    images[i].style.display = "block";
  } else if (i == images.length) {
    images[i - 1].style.display = "none";
    images[0].style.display = "block";
    i = 0;
  } else {
    images[i - 1].style.display = "none";
    images[i].style.display = "block";
  }
  i++;
}, 2000);

//Animering av skillbarsen

skillAnimation("illBar");
skillAnimation("javaBar");
skillAnimation("htmlBar");
skillAnimation("jsBar");
skillAnimation("sweBar");
skillAnimation("engBar");
skillAnimation("korBar");
skillAnimation("finBar");

function skillAnimation(querySelector) {
  let id = null;
  const elem = document.getElementById(querySelector);
  const progress = parseInt(elem.dataset.progress);

  let animatedWidth = 0;
  clearInterval(id);
  id = setInterval(frame, 10);

  function frame() {
    if (animatedWidth == progress) {
      clearInterval(id);
    } else {
      animatedWidth++;
      elem.style.width = animatedWidth + "%";
    }
  }
}
