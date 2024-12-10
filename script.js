//Function to initialise closure of toggling the menu.
let closure;
function initializeMenu() {
  const menu = document.querySelector(".navigation_container_menu");
  const list = document.querySelector(".navigation_container_list_container");
  closure = initiateToggleMobileMenu(menu, list);
}

//Closure to toggle the menu
function initiateToggleMobileMenu(menu, list) {
  let isOpen = false;
  const handleScroll = () => {
    if (isOpen) {
      menu.classList.remove("navigation_container_menu_toggle");
      list.classList.remove("navigation_container_list_container_toggle");
      isOpen = false;
      window.removeEventListener("scroll", handleScroll);
    }
  };

  return function () {
    if (isOpen) {
      menu.classList.remove("navigation_container_menu_toggle");
      list.classList.remove("navigation_container_list_container_toggle");
      isOpen = false;
    } else {
      menu.classList.add("navigation_container_menu_toggle");
      list.classList.add("navigation_container_list_container_toggle");
      isOpen = true;
      window.addEventListener("scroll", handleScroll);
    }
  };
}
//Function to call the closure for toggling the menu.
function toggleMobileMenu() {
  closure();
}
//Function to close menu and navigate to the clicked section
function handleClickOnMenuSection(clickedSection) {
  const goToSection = clickedSection.getAttribute("href");
  toggleMobileMenu();
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

//Observer API
//1) Target -> element we want to observe (footer)
//2) Threshold -> when the observer should be triggered on elemnt (0-1)
// 1 means it will be triggered when the element is completely visible
// 0 means it will be triggered when the element is not visible at all
//3) rootMargin -> margin around the root element
//4) root -> where we will be observing the target element (document by default)
function setupFooterObserver() {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.9,
  };
  const footerContainer = document.getElementById("footerContainerId");
  const callback = function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        footerContainer.classList.remove("footer_container_apply_hide");
        footerContainer.classList.add("footer_container_apply");
      } else {
        footerContainer.classList.remove("footer_container_apply");
        footerContainer.classList.add("footer_container_apply_hide");
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  return observer;
}
// Call it when the document is ready
document.addEventListener("DOMContentLoaded", () => {
  const observer = setupFooterObserver();
  const footer = document.getElementById("footerId");
  initializeMenu();
  observer.observe(footer);
});

//slider logic
let slidesLenght = 5; //Number of slides
let currentSlide = 0; //Current slide number
//Function to scroll to the next slide
function nextSlide() {
  const slider = document.getElementById("sliderId");
  currentSlide = (currentSlide + 1) % slidesLenght;
  console.log(currentSlide);
  slider.scrollTo({
    left: currentSlide * slider.offsetWidth,
    behavior: "smooth",
  });
}
//Function to scroll to the previous slide
function prevSlide() {
  const slider = document.getElementById("sliderId");
  currentSlide = (currentSlide - 1 + slidesLenght) % slidesLenght;
  console.log(currentSlide);
  slider.scrollTo({
    left: currentSlide * slider.offsetWidth,
    behavior: "smooth",
  });
}
