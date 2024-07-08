export function burgerClick() {
  let mobileNavIsOpen = false;

  const burgerBtn = document.getElementById("burger-button");
  const burgerMenu = document.querySelector(".header__items");
  burgerBtn.addEventListener("click", handleClick);
  const links = document.querySelectorAll(".header__list-link");
  links.forEach((link) => link.addEventListener("click", handleClick));

  function myFunc(event) {
    if (!event.target.matches(".header__items")) handleClick();
  }

  function handleClick() {
    burgerBtn.classList.toggle("burger-toggle");
    burgerMenu.classList.toggle("header__items_visible");
    mobileNavIsOpen = !mobileNavIsOpen;

    /*if (mobileNavIsOpen) {
      setTimeout(() => {
        window.addEventListener("click", myFunc);
      }, 10);
    } else {
      window.removeEventListener("click", myFunc);
    }
    */
  }
}
