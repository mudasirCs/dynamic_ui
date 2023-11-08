import "./drop-down.css";

const menuButton = document.querySelector("nav button");
const menu = document.querySelector("nav menu");

function appendOpaqueClassWithDelay(elements, index) {
  if (index < elements.length) {
    const listItem = elements[index];
    listItem.classList.add("opaque");

    setTimeout(() => {
      appendOpaqueClassWithDelay(elements, index + 1);
    }, 100);
  }
}

// function removeOpaqueClassWithDelay(elements, index) {
//   if (index >= 0) {
//     const listItem = elements[index];
//     listItem.classList.remove("opaque");

//     setTimeout(() => {
//       removeOpaqueClassWithDelay(elements, index - 1);
//     }, 10);
//   }
// }

// proper condition checks needed for item loading unloading

const addHover = function addHoverEvent(elementToHover, elementToShow) {
  const childElementsToShow = [...elementToShow.children];

  elementToHover.addEventListener("mouseenter", () => {
    elementToShow.classList.add("show");

    appendOpaqueClassWithDelay(childElementsToShow, 0);

    elementToShow.addEventListener("mouseenter", () => {
      elementToHover.classList.add("transparent");
      elementToShow.classList.add("show");
    });
  });

  elementToHover.addEventListener("mouseleave", () => {
    elementToShow.classList.remove("show");

    elementToShow.addEventListener("mouseleave", () => {
      childElementsToShow.forEach((listItem) => {
        listItem.classList.remove("opaque");
      });

      elementToHover.classList.remove("transparent");
      elementToShow.classList.remove("show");
    });
  });
};

addHover(menuButton, menu);
