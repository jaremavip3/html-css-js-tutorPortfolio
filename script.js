let closure;
window.onload = function () {
  const menu = document.querySelector(".navigation_container_menu");
  const list = document.querySelector(".navigation_container_list_container");
  closure = initiateToggleMobileMenu(menu, list);
};
function toggleMobileMenu() {
  closure();
}
function initiateToggleMobileMenu(menu, list) {
  let isOpen = false;
  return function () {
    if (isOpen) {
      menu.classList.remove("navigation_container_menu_toggle");
      list.classList.remove("navigation_container_list_container_toggle");
      console.log("close");
      isOpen = false;
    } else {
      menu.classList.add("navigation_container_menu_toggle");
      list.classList.add("navigation_container_list_container_toggle");
      console.log("open");
      isOpen = true;
    }
  };
}
