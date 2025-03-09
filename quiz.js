let pontuacao = 0; // Variável para contar as respostas corretas

function verificarResposta(perguntaAtual, resposta, proximaPergunta) {
    const respostasCorretas = {
        'pergunta1': 'Love Love- Gilsons',
        'pergunta2': 'Correr pra dentro do ônibus',
        'pergunta3': 'Quem é essa daí?',
        'pergunta4': 'Buquê',
        'pergunta5': 'Outback',
        'pergunta6': 'Te cheiro',
        'pergunta7': 'Foto minha'
    };

    // Remove as classes de correto/errado dos botões da pergunta atual
    const botoes = document.querySelectorAll(`#${perguntaAtual} .botoes button`);
    botoes.forEach(btn => {
        btn.classList.remove('correto', 'errado');
    });

    // Verifica se a resposta está correta
    if (resposta === respostasCorretas[perguntaAtual]) {
        pontuacao += 1; // Incrementa a pontuação
        // Aplica a classe 'correto' ao botão clicado
        const botaoClicado = Array.from(botoes).find(btn => btn.textContent === resposta);
        if (botaoClicado) {
            botaoClicado.classList.add('correto');
        }
    } else {
        // Aplica a classe 'errado' ao botão clicado
        const botaoClicado = Array.from(botoes).find(btn => btn.textContent === resposta);
        if (botaoClicado) {
            botaoClicado.classList.add('errado');
        }
    }

    // Aguarda 1 segundo e troca para a próxima pergunta
    setTimeout(() => {
        // Esconde a pergunta atual
        document.getElementById(perguntaAtual).style.display = 'none';

        // Mostra a próxima pergunta ou a tela final
        if (proximaPergunta === 'fim') {
            document.getElementById('pontuacao-final').textContent = pontuacao;
            document.getElementById('fim').style.display = 'block';
            criarCoracoes(); // Cria os corações
            redirecionarApos8Segundos(); // Redireciona após 8 segundos
        } else {
            document.getElementById(proximaPergunta).style.display = 'block';
        }
    }, 1000);
}

function criarCoracoes() {
    const coracoesContainer = document.getElementById('coracoes');
    coracoesContainer.innerHTML = ''; // Limpa corações anteriores

    for (let i = 0; i < 50; i++) { // Cria 50 corações
        const coracao = document.createElement('div');
        coracao.classList.add('coracao');
        coracao.style.left = `${Math.random() * 100}vw`; // Posição horizontal aleatória
        coracao.style.top = `${Math.random() * 100}vh`; // Posição vertical aleatória
        coracao.style.animationDelay = `${Math.random() * 1.5}s`; // Atraso aleatório
        coracao.style.color = `hsl(${Math.random() * 360}, 100%, 70%)`; // Cor aleatória
        coracao.textContent = '❤️'; // Símbolo do coração
        coracoesContainer.appendChild(coracao);
    }
}

function redirecionarApos8Segundos() {
    setTimeout(() => {
        window.location.href = "contagem.html"; // Substitua pelo caminho da sua página
    }, 8000); // 8000 milissegundos = 8 segundos
}