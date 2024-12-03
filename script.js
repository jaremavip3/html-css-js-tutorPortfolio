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

function handleClickOnMenuSection(clickedSection) {
  const goToSection = clickedSection.getAttribute("href");
  closure();
  location.href = goToSection;
}

function handleClickOnCard(buttonElement) {
  arg_text1 = "Price";
  arg_text2 = "Close";
  const card = document.querySelector(".prices_container_content");
  const button = document.querySelector(
    ".prices_container_article_buttonHolder_button"
  );
  button.innerText == arg_text1
    ? card.classList.add("prices_container_content_onClick")
    : card.classList.remove("prices_container_content_onClick");

  changeButtonText(button, arg_text1, arg_text2);
  console.log(button.innerText);
}
function changeButtonText(element, text1, text2) {
  element.innerText == text1
    ? (element.innerText = text2)
    : (element.innerText = text1);
}
