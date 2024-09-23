// profileButton.addEventListener('click', () => {
//     options.style.cssText = "visibility: visible; display: flex;";
// })

const profileButton = document.getElementById("profileButton");
const options = document.getElementById("options");

let isOpen = true;

profileButton.addEventListener("click", function () {  
  // options.add('hide');
  isOpen = !isOpen;
  if (isOpen) {
    options.style.cssText = "visibility: hidden; display: none;";    
  } else {
    options.style.cssText = "visibility: visible; display: flex;";    
  }
});
