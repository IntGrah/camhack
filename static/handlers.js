document.querySelectorAll(".faq-question .faq-toggle").forEach((faqToggle) => {
    faqToggle.addEventListener("click", () => {
        faqToggle.parentElement.classList.toggle("expanded");
    });
});
