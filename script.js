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

const startDate = new Date("2024-03-22T00:00:00").getTime();

// Atualiza o contador a cada segundo
setInterval(() => {
    const now = new Date().getTime();
    const timeElapsed = now - startDate;

    // Calcula dias, horas, minutos e segundos
    const days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);

    // Atualiza o DOM
    document.getElementById("days").textContent = days.toString().padStart(2, "0");
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
}, 1000);