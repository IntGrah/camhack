// When FAQ question clicked, toggle answer
document.querySelectorAll(".faq-question .faq-toggle").forEach((faqToggle) => {
    faqToggle.addEventListener("click", () => {
        faqToggle.parentElement.classList.toggle("expanded");
    });
});

// When hamburger icon clicked, toggle mobile menu
document.getElementById("header-hamburger").addEventListener("click", () => {
    document.getElementById("header-hamburger").classList.toggle("expanded");
    document.getElementById("mobile-menu-container").classList.toggle("expanded");
});

// When mobile menu link clicked, close mobile menu
document.querySelectorAll("#header-menu a").forEach((menuLink) => {
    menuLink.addEventListener("click", () => {
        document.getElementById("header-menu-container").classList.remove("expanded");
    });
});
