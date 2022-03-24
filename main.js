const hamburguer = document.querySelector(".hamburguer");
const primaryNav = document.querySelector(".nav-links");

hamburguer.addEventListener("click", function() {
    this.classList.toggle("nav-active");

    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        hamburguer.setAttribute("aria-expanded", true);
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
        hamburguer.setAttribute("aria-expanded", false);
    }
});