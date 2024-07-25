export function changeUrl() {
  window.addEventListener("hashchange", () => {
    history.replaceState(null, null, window.location.pathname);
  });
}
