document.addEventListener("DOMContentLoaded", () => {
  //Invänta HTML.

  //Animationer!
  window.onload = function () {
    startFadeAnimation();
    startSlideShow();
    startSkillsAnimation();
  };

  //Variabler till nedan
  let opacityIntervalId = NaN; //Animation
  let skillIntervalId = NaN; //Animation
  let slideIntervalId = NaN; //Animation

  let i = 0;
  let images = [];
  images[0] = "../images/alexander/slide1.jpg";
  images[1] = "../images/alexander/slide2.jpg";
  images[2] = "../images/alexander/slide3.jpg";
  let caption = document.getElementById("captionText");
  let description = document.getElementById("projectDesc");

  let currentHtmlSkill = Number(
    document.getElementById("htmlSkill").getAttribute("value")
  );
  let currentCssSkill = Number(
    document.getElementById("cssSkill").getAttribute("value")
  );
  let currentJsSkill = Number(
    document.getElementById("jsSkill").getAttribute("value")
  );
  let currentJavaSkill = Number(
    document.getElementById("javaSkill").getAttribute("value")
  );
  let currentSqlSkill = Number(
    document.getElementById("sqlSkill").getAttribute("value")
  );
  let currentChSkill = Number(
    document.getElementById("chSkill").getAttribute("value")
  );
  let currentUmlSkill = Number(
    document.getElementById("umlSkill").getAttribute("value")
  );

  const slideImage = document.getElementById("slideShow");
  const htmlSkill = document.getElementById("htmlSkill");
  const cssSkill = document.getElementById("cssSkill");
  const jsSkill = document.getElementById("jsSkill");
  const javaSkill = document.getElementById("javaSkill");
  const sqlSkill = document.getElementById("sqlSkill");
  const chSkill = document.getElementById("chSkill");
  const umlSkill = document.getElementById("umlSkill");

  const skillSet = {
    html: 70,
    css: 60,
    javascript: 65,
    java: 45,
    sql: 30,
    csharp: 55,
    uml: 40,
  };

  //Animering av presentationsrutan
  function startFadeAnimation() {
    opacityIntervalId = setInterval(increaseOpacity, 50);
  }
  function increaseOpacity() {
    let presentationBox = document.getElementById("presentationBox");
    let opacity = Number(
      window.getComputedStyle(presentationBox).getPropertyValue("opacity")
    );
    if (opacity < 1) {
      opacity = opacity + 0.1;
      presentationBox.style.opacity = opacity;
    } else {
      clearInterval(opacityIntervalId);
    }
  }
  //SLUT på animering av presentationsrutan

  //Animering av skills
  function startSkillsAnimation() {
    skillIntervalId = setInterval(increaseValues, 15);
  }
  function increaseValues() {
    if (currentHtmlSkill < skillSet.html) {
      currentHtmlSkill++;
      htmlSkill.setAttribute("value", currentHtmlSkill);
    } else if (currentCssSkill < skillSet.css) {
      currentCssSkill++;
      cssSkill.setAttribute("value", currentCssSkill);
    } else if (currentJsSkill < skillSet.javascript) {
      currentJsSkill++;
      jsSkill.setAttribute("value", currentJsSkill);
    } else if (currentJavaSkill < skillSet.java) {
      currentJavaSkill++;
      javaSkill.setAttribute("value", currentJavaSkill);
    } else if (currentSqlSkill < skillSet.sql) {
      currentSqlSkill++;
      sqlSkill.setAttribute("value", currentSqlSkill);
    } else if (currentChSkill < skillSet.csharp) {
      currentChSkill++;
      chSkill.setAttribute("value", currentChSkill);
    } else if (currentUmlSkill < skillSet.uml) {
      currentUmlSkill++;
      umlSkill.setAttribute("value", currentUmlSkill);
    } else {
      clearInterval(skillIntervalId);
    }
  }
  //SLUT på animering av skills

  //Slideshow
  function startSlideShow() {
    slideImage.src = images[0];
    slideIntervalId = setInterval(setNewImage, 3000);
  }

  //Ska refaktorisera denna sedan om jag hinner.
  function setNewImage() {
    slideImage.src = images[i];
    if (i <= images.length - 1) {
      switch (i) {
        case 0:
          caption.textContent = "Waving bear project";
          description.textContent =
            "Artificial bear waving (Machine Code only).";
          break;
        case 1:
          caption.textContent = "Praying bear project";
          description.textContent =
            "Robot bear praying for all the Java Developers (Python project).";
          break;
        case 2:
          caption.textContent = "Fighting bear project";
          description.textContent = "Fighting game project (C# / Unity).";
          i = -1;
          break;
        default:
      }
      i++;
    } else {
      i = 0;
    }
  }
});
