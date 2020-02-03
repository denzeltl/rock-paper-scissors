const menu = document.querySelector(".menu");
const menuStart = document.querySelector(".menu button");
let menuActive = true;

// #### Functions ####
// Open and close menu
function toggleMenu() {
    if (menuActive) {
        menu.classList.add("offset-menu");
    }
}

// #### Event listeners ####
menuStart.addEventListener("click", toggleMenu);
