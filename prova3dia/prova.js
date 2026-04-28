function mostrarTabelaJogos() {
    const container = document.getElementById('tabela-jogos-container');
    if (!container) return;

    if (container.querySelector('img')) {
        return;
    }

    const imagem = document.createElement('img');
    imagem.src = 'img/Tabela_Jogos.png';
    imagem.alt = 'Tabela de Jogos da Copa do Mundo 2026';
    imagem.style.width = '100%';
    imagem.style.borderRadius = '18px';
    imagem.style.marginTop = '18px';
    imagem.style.boxShadow = '0 14px 30px rgba(0, 0, 0, 0.12)';

    container.appendChild(imagem);

    const botao = document.getElementById('show-table-btn');
    if (botao) {
        botao.disabled = true;
        botao.textContent = 'Tabela carregada';
        botao.style.opacity = '0.8';
        botao.style.cursor = 'default';
    }
}
