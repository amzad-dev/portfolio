const menuButton = document.querySelector("#menu-btn");
const container = document.querySelector(".navigation");

function openMenu() {

    container.classList.toggle("menu-active");
    menuButton.classList.toggle("btn-active");
}

menuButton.addEventListener("click", openMenu);
