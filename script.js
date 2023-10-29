/* window.onload = function() {
    window.scrollTo(0, 0);
};
 */
let typedText = new Typed(".auto-type", {
    strings: ['Web Developer'],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true 
});

const links = document.querySelectorAll(".link");
let active_link = 0;

links.forEach((link, i) => {
    link.addEventListener("click", () => {
        if(active_link != i){
            links[active_link].classList.remove("active");
            link.classList.add("active");
            active_link = i;
        }
    })
})

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const hamburgerIcon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    hamburgerIcon.classList.toggle("open");
}