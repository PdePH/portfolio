// RESPONSIVE MENU

let show = true;

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    show = !show;

    const menuNav = document.getElementById("nav-action")

        menuNav.addEventListener("click", () => {

        document.body.style.overflow = show ? "hidden" : "initial"

        menuSection.classList.toggle("on", show)
        })
})

// main-carousel

const buttonRight = document.querySelector('.button-arrow.-right');
const buttonLeft = document.querySelector('.button-arrow.-left');
const elements = document.querySelector('.elements');
let pixels = 0;

buttonRight.addEventListener('click', function() {
    if (pixels == -80) { return; } 
    else { pixels = pixels - 10; }
    elements.style = `transform: translateX(${pixels}rem);`;
});

buttonLeft.addEventListener('click', function() {
    if (pixels == 0) { return; } 
    else { pixels = pixels + 10; }
    elements.style = `transform: translateX(${pixels}rem);`;
});
