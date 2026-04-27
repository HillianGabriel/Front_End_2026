function revelar(){
    const dados = {
        Nome: 'Vinícius José Paixão de Oliveira Júnior',
        Data_Nas: '12/07/2000 (25 anos)',
        Altura: '1,76 m',
        Posicao: 'Ponta-esquerda / Atacante',
        Rank: '9,5',
        imagem: 'img/_vinicius_junior.png'
    };

    const imagemPrincipal = document.querySelector('.card-img-top');
    if (imagemPrincipal) {
        imagemPrincipal.src = dados.imagem;
    }

    Object.entries(dados).forEach(([id, valor]) => {
        if (id === 'imagem') return;
        const elemento = document.getElementById(id);
        if (!elemento) return;

        elemento.textContent = valor;
        elemento.classList.remove('placeholder', 'col-4', 'col-6');
        elemento.classList.add('card-text');
        if (elemento.parentElement && elemento.parentElement.classList.contains('placeholder-glow')) {
            elemento.parentElement.classList.remove('placeholder-glow');
        }
    });
}