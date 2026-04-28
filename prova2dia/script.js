
function add() {
    const cardsContainer = document.getElementById("Cards");

    const novoCard = document.createElement("div");
    novoCard.className = "card";

    novoCard.innerHTML =
        '<img src="img/Lucas_Paqueta.webp"' +
        '     class="card-img-top"' +
        '     alt="Lucas Paquetá"' +
        '     onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'flex\';">' +
        '<div class="card-img-placeholder"></div>' +
        '<div class="card-body">' +
            '<h5 class="card-title">' +
                'Lucas Paquetá ' +
                '<span class="badge">8,8</span>' +
            '</h5>' +
            '<div class="card-divider"></div>' +
            '<p class="card-text">' +
                '<span><strong>Nascimento:</strong> 27/08/1997</span><br>' +
                '<span><strong>Altura:</strong> 1,80 m</span><br>' +
                '<span><strong>Posição:</strong> Meio-campista</span>' +
            '</p>' +
        '</div>';

    cardsContainer.appendChild(novoCard);
}
