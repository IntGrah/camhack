// When FAQ question clicked, toggle answer
document.querySelectorAll(".faq-question .faq-toggle").forEach((faqToggle) => {
    faqToggle.addEventListener("click", () => {
        faqToggle.parentElement.classList.toggle("expanded");
    });
});

// When hamburger icon clicked, toggle menu
document.getElementById("header-hamburger").addEventListener("click", () => {
    document.getElementById("header-hamburger").classList.toggle("expanded");
    document.getElementById("header-menu-container").classList.toggle("expanded");
});

// When menu link clicked, close menu
document.querySelectorAll("#header-menu a").forEach((menuLink) => {
    menuLink.addEventListener("click", () => {
        document.getElementById("header-menu-container").classList.remove("expanded");
    });
});
