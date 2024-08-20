const menuButton = document.querySelector("#menu-btn");
const menuCloseButton = document.querySelector("#menu-close-btn");
const container = document.querySelector(".navigation");

const openMenu = () => {
    container.style.display = "block";
};
const closeMenu = () => {
    container.style.display = "none";
};

menuButton.addEventListener("click", openMenu);
menuCloseButton.addEventListener("click", closeMenu);
