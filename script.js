function verificarQuiz() {
    let pontos = 0;
    const total = 3;

    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');

    if (q1 && q1.value === "b") pontos++;
    if (q2 && q2.value === "b") pontos++;
    if (q3 && q3.value === "c") pontos++;

    const percentual = (pontos / total) * 100;

    const resultado = document.getElementById("resultado");
    resultado.textContent = `Você acertou ${pontos} de ${total} (${percentual}%)`;
    resultado.style.color = percentual >= 70 ? "green" : "red";
}

function salvarFeedback(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;

    const novoFeedback = { nome, mensagem };

    let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    feedbacks.push(novoFeedback);

    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));

    document.querySelector("form").reset();
    mostrarFeedbacks();
}

function mostrarFeedbacks() {
    const lista = document.getElementById("feedbacks");
    lista.innerHTML = "";

    let feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];

    feedbacks.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.nome}: ${item.mensagem}`;
        lista.appendChild(li);
    });
}

document.addEventListener("DOMContentLoaded", mostrarFeedbacks);