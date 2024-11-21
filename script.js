let slideIndex = 0;
showSlide(slideIndex);

// Função para mostrar o slide atual
function showSlide(index) {
    const slides = document.querySelectorAll(".slide");
    if (index >= slides.length) slideIndex = 0; // Volta ao início
    if (index < 0) slideIndex = slides.length - 1; // Vai para o último

    slides.forEach(slide => slide.style.display = "none"); // Oculta todos
    slides[slideIndex].style.display = "block"; // Mostra o atual
}

// Função para mudar de slide
function changeSlide(n) {
    showSlide(slideIndex += n);
}

