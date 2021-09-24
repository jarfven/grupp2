document.addEventListener("DOMContentLoaded", () => {
  //Invänta HTML.

  //Variabler till nedan
  let intervalId = NaN; //Animation

  //Anrop
  startFadeAnimation(); //Kör animering.

  /* Animering av presentationsrutan */
  function startFadeAnimation() {
    intervalId = setInterval(increaseOpacity, 50);
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
      clearInterval(intervalId);
    }
  }
  /* Animering av presentationsrutan - SLUT */
});
