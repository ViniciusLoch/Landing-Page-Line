let slideIndex = 0;
showSlide(slideIndex);

function showSlide(index) {
    const slides = document.querySelectorAll(".slide");
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;

    slides.forEach(slide => slide.style.display = "none");
    slides[slideIndex].style.display = "block";
}

function changeSlide(n) {
    showSlide(slideIndex += n);
}



// Contador de Tempo Decorrido
const startDate = new Date("2024-03-22T00:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const timeElapsed = now - startDate;

    // Data inicial como objeto para cálculos de meses
    const start = new Date("2024-03-22T00:00:00");
    const current = new Date();

    // Calcula anos e meses decorridos
    let months = (current.getFullYear() - start.getFullYear()) * 12;
    months += current.getMonth() - start.getMonth();

    if (current.getDate() < start.getDate()) {
        months -= 1; // Ajusta se o dia atual ainda não passou no mês corrente
    }

    // Calcula dias, horas, minutos e segundos
    const days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);

    // Atualiza o DOM
    document.getElementById("months").textContent = months.toString().padStart(2, "0");
    document.getElementById("days").textContent = days.toString().padStart(2, "0");
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
}, 1000);