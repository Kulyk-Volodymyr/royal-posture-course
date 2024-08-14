export function animation() {
  window.onload = function () {
    const preolad = document.getElementById("preload");
    preolad.parentElement.removeChild(preolad);
  };
}
