export function animation() {
  window.onload = function () {
    const preolad = document.getElementById("preload");
    preolad.parentElement.removeChild(preolad);
    const preloadStyle = document.getElementById("preloadStyle");
    preloadStyle.parentElement.removeChild(preloadStyle);

    document.querySelector(".hero__title").classList.remove("hero_transition");
    document
      .querySelector(".hero__subtitle")
      .classList.remove("hero_transition");
    document.querySelector(".hero__date").classList.remove("hero_transition");
    document.querySelector(".hero__button").classList.add("button_animation");
  };

  window.addEventListener("scroll", () => {
    const bottomToShow = window.innerHeight - 120;

    /* =============== Headers =============== */
    [...document.getElementsByClassName("caption_transition")].forEach(
      (item) => {
        if (item.getBoundingClientRect().top < bottomToShow) {
          item.classList.remove("caption_transition");
        }
      }
    );

    /* =============== Buttons =============== */
    let buttons = [
      document.querySelector(".about__button"),
      document.querySelector(".specialists__button"),
      document.querySelector(".effects__button"),
      document.querySelector(".results__button"),
    ];
    for (let i in buttons) {
      if (buttons[i].getBoundingClientRect().top < bottomToShow) {
        buttons[i].classList.add("button_animation");
      }
    }

    /* =============== About Section =============== */
    const aboutCards = document.getElementsByClassName("aboutCard");
    if (aboutCards[0].getBoundingClientRect().top < bottomToShow) {
      [...aboutCards].forEach((i, index) => {
        i.childNodes[1].classList.remove("opacity_transition");
        i.childNodes[3].classList.remove("to_left_and_transparent");
        i.childNodes[5].style.transitionDelay = `${index * 0.2}s`;
        i.childNodes[5].classList.remove("image_transition");
      });
    }

    /* =============== Warning Section =============== */
    const warningCards = document.getElementsByClassName("warning__item");
    const warningIcons = document.getElementsByClassName("warning__closed");
    [...warningCards].forEach((i, index) => {
      if (i.getBoundingClientRect().top < bottomToShow) {
        i.classList.remove("warning__transition");
        warningIcons[index].classList.add("warning__closed_animation");
      }
    });

    /* =============== Modules Section =============== */
    const module1content = document.getElementById("module1").children;
    const module1items = [
      ...module1content[0].children,
      ...module1content[1].children,
      ...module1content[2].children,
    ];
    if (module1content[0].getBoundingClientRect().top < bottomToShow) {
      [...module1items].forEach((i, index) => {
        i.style.transitionDelay = `${index * 0.3}s`;
        i.classList.remove("to_left_and_transparent");
      });
    }

    const module2content = document.getElementById("module2").children;
    const module2items = [
      ...module2content[0].children,
      ...module2content[1].children,
      ...module2content[2].children,
    ];
    if (module2content[0].getBoundingClientRect().top < bottomToShow) {
      [...module2items].forEach((i, index) => {
        i.style.transitionDelay = `${index * 0.3}s`;
        i.classList.remove("to_left_and_transparent");
      });
    }

    const module3content = document.getElementById("module3").children;
    const module3items = [
      ...module3content[0].children,
      ...module3content[1].children,
      ...module3content[2].children,
    ];
    if (module3content[0].getBoundingClientRect().top < bottomToShow) {
      [...module3items].forEach((i, index) => {
        i.style.transitionDelay = `${index * 0.3}s`;
        i.classList.remove("to_left_and_transparent");
      });
    }

    const module4content = document.getElementById("module4").children;
    const module4items = [
      ...module4content[0].children,
      ...module4content[1].children,
      ...module4content[2].children,
    ];
    if (module4content[0].getBoundingClientRect().top < bottomToShow) {
      [...module4items].forEach((i, index) => {
        i.style.transitionDelay = `${index * 0.3}s`;
        i.classList.remove("to_left_and_transparent");
      });
    }

    const modulesImage = document.querySelector(".modules__image");
    const modulesText = document.querySelector(".modules__text");
    if (
      document.querySelector(".modules__info").getBoundingClientRect().top <
      bottomToShow
    ) {
      modulesImage.classList.remove("modules__info_transition");
      modulesText.style.transitionDelay = "0.2s";
      modulesText.classList.remove("modules__info_transition");
    }

    /* =============== Specialists Section =============== */
    const specImg = document.querySelector(".specialists__illustration");
    if (specImg.getBoundingClientRect().top < bottomToShow) {
      specImg.classList.remove("opacity_transition");
    }
    const specDoctors = document.getElementsByClassName("specialists__doctor");
    if (specDoctors[0].getBoundingClientRect().top < bottomToShow) {
      [...specDoctors].forEach((i, index) => {
        i.style.transitionDelay = `${index * 0.3}s`;
        i.classList.remove("opacity_transition");
      });
    }

    /* =============== Effects Section =============== */
    const effectsCards = document.getElementsByClassName("effects__effect");
    if (effectsCards[0].getBoundingClientRect().top < bottomToShow) {
      [...effectsCards].forEach((i, index) => {
        i.style.transitionDelay = `${index * 0.15}s`;
        i.classList.remove("effects__effect_transition");
        i.childNodes[1].style.transitionDelay = `${index * 0.15}s`;
        i.childNodes[1].classList.remove("image_transition");
      });
    }

    /* =============== Experts Section =============== */
    const expertsSliders = document.querySelector(".experts__sliders");
    if (expertsSliders.getBoundingClientRect().top < bottomToShow) {
      expertsSliders.classList.remove("opacity_transition");
    }

    /* =============== Comparison Section =============== */
    const comparisonSlider = document.querySelector(".comparison-slider");
    if (comparisonSlider.getBoundingClientRect().top < bottomToShow) {
      comparisonSlider.classList.remove("opacity_transition");
    }

    /* =============== Plans Section =============== */
    const planTitles = document.getElementsByClassName("plan__title");
    const planSubtitles = document.getElementsByClassName("plan__subtitle");
    for (let i = 0; i < 3; i++) {
      if (planTitles[i].getBoundingClientRect().top < bottomToShow) {
        planTitles[i].classList.remove("opacity_transition");
        planSubtitles[i].style.transitionDelay = "0.4s";
        planSubtitles[i].classList.remove("opacity_transition");
      }
    }

    const planContents = document.getElementsByClassName("plan__content");
    const planButtons = [
      document.querySelector("#button-plan-i-myself"),
      document.querySelector("#button-plan-all-inclusive"),
      document.querySelector("#button-plan-vip"),
    ];
    for (let i = 0; i < 3; i++) {
      if (planContents[i].getBoundingClientRect().top < bottomToShow) {
        [...planContents[i].children].forEach((item, index) => {
          item.style.transitionDelay = `${index * 0.3}s`;
          item.classList.remove("to_left_and_transparent");
        });
        planButtons[i].classList.add("button_animation");
      }
    }

    /* =============== Options Section =============== */
    const optionsCards = document.getElementsByClassName("options__article");
    const optionsTitles = document.getElementsByClassName("options__title");
    const optionsInfo = document.getElementsByClassName("options__info");
    if (optionsCards[0].getBoundingClientRect().top < bottomToShow) {
      [...optionsCards].forEach((i) => {
        i.classList.remove("opacity_transition");
      });
      [...optionsTitles, ...optionsInfo].forEach((i) => {
        i.classList.remove("to_left_and_transparent");
      });
      document
        .querySelector(".options__mobile")
        .classList.remove("options__mobile_transition");
    }
    if (optionsCards[3].getBoundingClientRect().top < bottomToShow) {
      document
        .querySelector(".options__fruits")
        .classList.remove("options__fruits_transition");
    }

    /* =============== Results Section =============== */
    const resultsImg = document.querySelector(".results__illustration");
    if (resultsImg.getBoundingClientRect().top < bottomToShow) {
      resultsImg.classList.remove("opacity_transition");
    }
    const resultsArticle = document.querySelector(".results__article");
    if (resultsArticle.getBoundingClientRect().top < bottomToShow) {
      [...resultsArticle.childNodes].forEach((i, index) => {
        if (index % 2 === 1) {
          i.style.transitionDelay = `${index * 0.2}s`;
          i.classList.remove("opacity_transition");
        }
      });
    }

    /* =============== Faqs Section =============== */
    const faqsImg = document.querySelector(".faqs__illustration");
    if (faqsImg.getBoundingClientRect().top < bottomToShow) {
      faqsImg.classList.remove("opacity_transition");
    }
    const faqsContactIcon = document.querySelector(".faqs__contact-icon");
    const faqsContactText = document.querySelector(".faqs__contact-text");
    if (
      document.querySelector(".faqs__contact").getBoundingClientRect().top <
      bottomToShow
    ) {
      faqsContactIcon.classList.remove("faqs__contact_transition");
      faqsContactText.style.transitionDelay = "0.2s";
      faqsContactText.classList.remove("faqs__contact_transition");
    }
  });
}
