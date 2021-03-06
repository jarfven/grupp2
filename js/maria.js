//Delays för när fadein ska ske
setTimeout(fadeInImg, 100);
setTimeout(fadeInSocial, 300);
setTimeout(fadeInBio, 500);
setTimeout(fadeInSkill, 700);

//Fadein för bild och namn
function fadeInImg() {
  fadeAnimation(".imgWrapper");
}

function fadeAnimation(querySelector) {
  let id = null;
  const elem = document.querySelector(querySelector);
  const opacity = getComputedStyle(elem).opacity;
  console.log(opacity);

  let animateOpacity = 0;
  clearInterval(id);
  id = setInterval(frame, 10);

  function frame() {
    if (animateOpacity == 1) {
      clearInterval(id);
    } else {
      animateOpacity = animateOpacity + 0.02;
      elem.style.opacity = animateOpacity;
    }
  }
}
//Fadein för socialamediaknappar
function fadeInSocial() {
  fadeAnimation(".socialWrapper");
}

function fadeAnimation(querySelector) {
  let id = null;
  const elem = document.querySelector(querySelector);
  const opacity = getComputedStyle(elem).opacity;
  console.log(opacity);

  let animateOpacity = 0;
  clearInterval(id);
  id = setInterval(frame, 10);

  function frame() {
    if (animateOpacity == 1) {
      clearInterval(id);
    } else {
      animateOpacity = animateOpacity + 0.02;
      elem.style.opacity = animateOpacity;
    }
  }
}

//Fadein för bio
function fadeInBio() {
  fadeAnimation(".bioWrapper");
}

function fadeAnimation(querySelector) {
  let id = null;
  const elem = document.querySelector(querySelector);
  const opacity = getComputedStyle(elem).opacity;
  console.log(opacity);

  let animateOpacity = 0;
  clearInterval(id);
  id = setInterval(frame, 10);

  function frame() {
    if (animateOpacity == 1) {
      clearInterval(id);
    } else {
      animateOpacity = animateOpacity + 0.02;
      elem.style.opacity = animateOpacity;
    }
  }
}
//Fadein skills
function fadeInSkill() {
  fadeAnimation(".skillWrapper");
}

function fadeAnimation(querySelector) {
  let id = null;
  const elem = document.querySelector(querySelector);
  const opacity = getComputedStyle(elem).opacity;
  console.log(opacity);

  let animateOpacity = 0;
  clearInterval(id);
  id = setInterval(frame, 10);

  function frame() {
    if (animateOpacity == 1) {
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

  let wid = 0;
  clearInterval(id);
  id = setInterval(frame, 5);

  function frame() {
    if (wid == progress) {
      clearInterval(id);
    } else {
      wid++;
      elem.style.width = wid + "%";
    }
  }
}
