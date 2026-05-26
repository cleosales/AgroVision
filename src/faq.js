document.addEventListener("DOMContentLoaded", () => {
    const faqTitles = document.querySelectorAll(".faq-title");

    faqTitles.forEach(title => {
        title.addEventListener("click", () => {
            const content = title.nextElementSibling;
            
            // Alterna a classe 'show' que controla a altura e visibilidade
            content.classList.toggle("show");
        });
    });
});