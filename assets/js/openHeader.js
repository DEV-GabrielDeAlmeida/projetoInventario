// profileButton.addEventListener('click', () => {
//     options.style.cssText = "visibility: visible; display: flex;";
// })

const profileButton = document.getElementById("profileButton");
const options = document.getElementById("options");

let isOpen = false;

profileButton.addEventListener("click", function () {
  isOpen = !isOpen;
  if (isOpen) {
    options.style.cssText = "visibility: hidden; display: none;";
  } else {
    options.style.cssText = "visibility: visible; display: flex;";
  }
});
