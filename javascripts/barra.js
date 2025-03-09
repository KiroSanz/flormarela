// Inicializando a barra de progresso
let progress = document.getElementById('progress');
let loveLevel = document.getElementById('loveLevel');
let increaseBtn = document.getElementById('increaseBtn');
let decreaseBtn = document.getElementById('decreaseBtn');

// Inicializando o progresso em 0%
let currentLevel = 0;

// Função para atualizar a barra e o nível de amor
function updateProgress() {
    progress.style.width = currentLevel + '%'; // Atualiza a largura da barra
    loveLevel.textContent = 'Nível de Amor: ' + currentLevel + '%'; // Atualiza o texto do nível de amor

    // Redirecionar para outra página quando atingir 100%
    if (currentLevel >= 100) {
        // Adiciona uma classe para a animação de fade-out
        document.body.classList.add('fade-out');
        
        // Espera o tempo da animação de fade-out (500ms) e redireciona
        setTimeout(function() {
            window.location.href = 'quiz.html';  // Substitua 'sua-pagina.html' pela URL desejada
        }, 500);  // Tempo igual ao da animação
    }
}

// Aumentar o nível de amor
increaseBtn.addEventListener('click', function() {
    if (currentLevel < 100) {
        currentLevel += 10; // Aumenta o nível em 10%
        updateProgress();
    }
});

// Diminuir o nível de amor
decreaseBtn.addEventListener('click', function() {
    if (currentLevel > 0) {
        currentLevel -= 10; // Diminui o nível em 10%
        updateProgress();
    }
});
