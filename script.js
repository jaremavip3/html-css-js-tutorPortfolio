let closure;

function initializeMenu() {
  const menu = document.querySelector(".navigation_container_menu");
  const list = document.querySelector(".navigation_container_list_container");
  closure = initiateToggleMobileMenu(menu, list);
}
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

//Observer API
//1) Target -> element we want to observe
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

        console.log("footer is visible");
      } else {
        footerContainer.classList.remove("footer_container_apply");
        footerContainer.classList.add("footer_container_apply_hide");

        console.log("footer is not visible");
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

// //slider logic
// let slideIndex = 0;
// let slidesLenght = 5;
// let currentSlide = 0;
// const slides = document.getElementById("sliderId").children;
// const nextButton = document.getElementById("review_next");
// const prevButton = document.getElementById("review_prev");

// function nextSlide() {
//   slides.item;
// }
