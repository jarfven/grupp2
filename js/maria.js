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

mySkillAnimation();

function mySkillAnimation() {
  const javaBar = document.getElementById("javaBar");
  let animatedWidthJava = 0;
  let animatedWidthIllu = 0;
  let animatedWidthHtml = 0;
  let animatedWidthJs = 0;
  let animatedWidthSwe = 0;
  let animatedWidthEng = 0;
  let animatedWidthKor = 0;
  let animatedWidthFin = 0;
  //Bestäm hastigheten för animationen.
  setInterval(animatePercent, 1);

  var finalWidthJava = parseFloat(document.getElementById("java").innerHTML);
  var finalWidthIllu = parseFloat(document.getElementById("illu").innerHTML);
  var finalWidthHtml = parseFloat(document.getElementById("html").innerHTML);
  var finalWidthJs = parseFloat(document.getElementById("js").innerHTML);
  var finalWidthSwe = parseFloat(document.getElementById("swe").innerHTML);
  var finalWidthEng = parseFloat(document.getElementById("eng").innerHTML);
  var finalWidthKor = parseFloat(document.getElementById("kor").innerHTML);
  var finalWidthFin = parseFloat(document.getElementById("fin").innerHTML);

  function animatePercent() {
    if (animatedWidthJava < finalWidthJava) {
      animatedWidthJava++;
      javaBar.style.width = animatedWidthJava + "%";
    } else if (animatedWidthIllu < finalWidthIllu) {
      animatedWidthIllu++;
      illBar.style.width = animatedWidthIllu + "%";
    } else if (animatedWidthHtml < finalWidthHtml) {
      animatedWidthHtml++;
      htmlBar.style.width = animatedWidthHtml + "%";
    } else if (animatedWidthJs < finalWidthJs) {
      animatedWidthJs++;
      jsBar.style.width = animatedWidthJs + "%";
    } else if (animatedWidthSwe < finalWidthSwe) {
      animatedWidthSwe++;
      sweBar.style.width = animatedWidthSwe + "%";
    } else if (animatedWidthEng < finalWidthEng) {
      animatedWidthEng++;
      engBar.style.width = animatedWidthEng + "%";
    } else if (animatedWidthKor < finalWidthKor) {
      animatedWidthKor++;
      korBar.style.width = animatedWidthKor + "%";
    } else if (animatedWidthFin < finalWidthFin) {
      animatedWidthFin++;
      finBar.style.width = animatedWidthFin + "%";
    }
  }
}
