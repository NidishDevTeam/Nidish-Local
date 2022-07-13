const headerBar = document.querySelector(".bar");
const headerX = document.querySelector(".times");
const navContainer = document.querySelector(".sec-nav-contents");

headerBar.addEventListener("click", () => {
    navContainer.style.display = "flex";
    headerBar.style.display = "none";
    headerX.style.display = "block";
});

headerX.addEventListener("click", () => {
    navContainer.style.display = "none";
    headerX.style.display = "none";
    headerBar.style.display = "block";
});