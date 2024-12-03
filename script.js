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

      isOpen = false;
    } else {
      menu.classList.add("navigation_container_menu_toggle");
      list.classList.add("navigation_container_list_container_toggle");

      isOpen = true;
    }
  };
}

function handleClickOnMenuSection(clickedSection) {
  const goToSection = clickedSection.getAttribute("href");
  closure();
  location.href = goToSection;
}

//Function to handle the click on the card
//____I use it to add styles to the card elements onClick____
function handleClickOnCard(buttonElement, cardId) {
  arg_text1 = "Price";
  arg_text2 = "Close";
  const card = document.getElementById(cardId);
  //Depending on the inner text of the button, I add or remove the class of the card
  buttonElement.innerText == arg_text1
    ? card.classList.add("prices_container_content_onClick")
    : card.classList.remove("prices_container_content_onClick");
  //Depending on the inner text of the button, I change the text of the button
  buttonElement.innerText == arg_text1
    ? (buttonElement.innerText = arg_text2)
    : (buttonElement.innerText = arg_text1);
}
