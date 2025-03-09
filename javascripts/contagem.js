// Funções para o carrossel de imagens (mantidas)
let currentIndex = 0;

function showSlide(index) {
    const carouselInner = document.querySelector('.carousel-inner');
    const totalItems = document.querySelectorAll('.carousel-item').length;

    if (index >= totalItems) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalItems - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

showSlide(currentIndex);

// Função para exibir mensagens conforme o scroll
function handleScroll() {
    const scrollMessages = document.querySelectorAll('.scroll-message');
    scrollMessages.forEach((message) => {
        const rect = message.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) { // 80% da tela
            message.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);

// Inicializa a verificação do scroll
handleScroll();

// Contador (mantido)
function updateCounter() {
    const startDate = new Date("2024-11-18T00:00:00");
    const now = new Date();
    const diff = now - startDate;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('years').querySelector('.number').textContent = years;
    document.getElementById('months').querySelector('.number').textContent = months;
    document.getElementById('days').querySelector('.number').textContent = days;
    document.getElementById('hours').querySelector('.number').textContent = hours;
    document.getElementById('minutes').querySelector('.number').textContent = minutes;
    document.getElementById('seconds').querySelector('.number').textContent = seconds;
}

setInterval(updateCounter, 1000);
updateCounter();