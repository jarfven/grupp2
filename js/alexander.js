document.addEventListener("DOMContentLoaded", () => {
  //Invänta HTML.

  //Variabler till nedan
  let opacityIntervalId = NaN; //Animation
  let skillIntervalId = NaN; //Animation
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

  //Animera!
  startFadeAnimation();
  startSkillsAnimation();

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
    skillIntervalId = setInterval(increaseValues, 25);
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
});
