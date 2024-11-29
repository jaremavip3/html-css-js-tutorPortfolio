let closure;
window.onload = function () {
  const menu = document.querySelector(".navigation-container-menu");
  const list = document.querySelector(".navigation-container-list-container");
  closure = initiateToggleMobileMenu(menu, list);
};
function toggleMobileMenu() {
  closure();
}
function initiateToggleMobileMenu(menu, list) {
  let isOpen = false;
  return function () {
    if (isOpen) {
      menu.classList.remove("navigation-container-menu-toggle");
      list.classList.remove("navigation-container-list-container-toggle");
      console.log("close");
      isOpen = false;
    } else {
      menu.classList.add("navigation-container-menu-toggle");
      list.classList.add("navigation-container-list-container-toggle");
      console.log("open");
      isOpen = true;
    }
  };
}
