
const track = document.getElementById("track");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dots = document.querySelectorAll(".dot");

let indiceAtual = 0;
const totalFotos = track.children.length;

let intervalo;

function atualizarCarrossel() {
    track.style.transform = `translateX(-${indiceAtual * 100}%)`;

    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === indiceAtual);
    });
}

// Próxima foto
function proximaFoto() {
    indiceAtual++;

    if (indiceAtual >= totalFotos) {
        indiceAtual = 0;
    }

    atualizarCarrossel();
}

// Foto anterior
function fotoAnterior() {
    indiceAtual--;

    if (indiceAtual < 0) {
        indiceAtual = totalFotos - 1;
    }

    atualizarCarrossel();
}

// Botões
nextBtn.addEventListener("click", () => {
    proximaFoto();
    reiniciarAutomatico();
});

prevBtn.addEventListener("click", () => {
    fotoAnterior();
    reiniciarAutomatico();
});

// Bolinhas
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        indiceAtual = index;
        atualizarCarrossel();
        reiniciarAutomatico();
    });
});

// Passagem automática
function iniciarAutomatico() {
    intervalo = setInterval(proximaFoto, 3000);
}

// Reinicia o intervalo após interação manual
function reiniciarAutomatico() {
    clearInterval(intervalo);
    iniciarAutomatico();
}

iniciarAutomatico();


// MODO NOTURNO

const temaBtn = document.getElementById("tema-btn");
const temaSalvo = localStorage.getItem("tema");

// Aplica o tema salvo
if (temaSalvo === "escuro") {
    document.body.classList.add("dark-mode");
}

// Configura o botão, quando existir
if (temaBtn) {
    const iconeTema = temaBtn.querySelector("i");

    function atualizarIcone() {
        const modoEscuro = document.body.classList.contains("dark-mode");

        iconeTema.className = modoEscuro
            ? "fa-solid fa-sun"
            : "fa-solid fa-moon";

        temaBtn.setAttribute(
            "aria-label",
            modoEscuro ? "Ativar modo claro" : "Ativar modo noturno"
        );
    }

    atualizarIcone();

    temaBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        const modoEscuro = document.body.classList.contains("dark-mode");

        localStorage.setItem("tema", modoEscuro ? "escuro" : "claro");

        atualizarIcone();
    });
}

