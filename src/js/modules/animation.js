export function animation() {
  window.onload = function () {
    const preolad = document.getElementById("preload");
    preolad.parentElement.removeChild(preolad);

    const title = document.getElementsByClassName("hero__title")[0];
    title.classList.remove("hero_transition");
    const subtitle = document.getElementsByClassName("hero__subtitle")[0];
    subtitle.classList.remove("hero_transition");
    const button = document.getElementsByClassName("hero__button")[0];
    button.classList.remove("hero_transition");
    const date = document.getElementsByClassName("hero__date")[0];
    date.classList.remove("hero_transition");
  };

  const bottomToShow = window.innerHeight - 120;
  const bottomToHide = window.innerHeight - 60;
  const aboutCards = document.getElementsByClassName("aboutCard");
  const aboutWarnings = document.getElementsByClassName("warning__warnings")[0];
  const aboutWarningIcons = document.getElementsByClassName("warning__closed");

  window.addEventListener("scroll", () => {
    if (aboutCards[0].getBoundingClientRect().top < bottomToShow) {
      [...aboutCards].forEach((i, index) => {
        i.childNodes[3].classList.remove("aboutCard__text_transition");
        i.childNodes[5].style.transitionDelay = `${index * 0.25}s`;
        i.childNodes[5].classList.remove("aboutCard__image_transition");
      });
    }
    if (aboutCards[0].getBoundingClientRect().top > bottomToHide) {
      [...aboutCards].forEach((i) => {
        i.childNodes[3].classList.add("aboutCard__text_transition");
        i.childNodes[5].classList.add("aboutCard__image_transition");
      });
    }

    if (aboutWarnings.getBoundingClientRect().top < window.innerHeight - 200) {
      [...aboutWarningIcons].forEach((i, index) => {
        i.classList.add("warning__closed_animation");
        i.style.animationDelay = `${index * 0.25}s`;
      });
    }
    if (aboutWarnings.getBoundingClientRect().top > bottomToHide) {
      [...aboutWarningIcons].forEach((i) =>
        i.classList.remove("warning__closed_animation")
      );
    }
  });
}
