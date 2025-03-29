let vh = window.innerHeight * .01;

document.getElementById("introduction").style.setProperty("--vh", `${vh}px`);

//dropdown menu code
const dropdownButton = document.getElementById("dropdownButton");
const overlayMenu = document.getElementById("overlay");
const closeMenuButton = document.getElementById("closeMenuButton");
const menuLink = document.getElementById("menuLink");

function openMenu()
{
    overlayMenu.style.width = "100%";
};

function closeMenu()
{
    overlayMenu.style.width = "0%";
}

dropdownButton.addEventListener("click", openMenu);
closeMenuButton.addEventListener("click", closeMenu);