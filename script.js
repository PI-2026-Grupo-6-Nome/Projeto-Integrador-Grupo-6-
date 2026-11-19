
// ==============================
// CARROSSEL
// ==============================

const track = document.getElementById("track");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dots = document.querySelectorAll(".dot");

if (track && prevBtn && nextBtn) {

    let indiceAtual = 0;
    const totalFotos = track.children.length;
    let intervalo;

    function atualizarCarrossel() {
        track.style.transform = `translateX(-${indiceAtual * 100}%)`;

        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === indiceAtual);
        });
    }

    function proximaFoto() {
        indiceAtual = (indiceAtual + 1) % totalFotos;
        atualizarCarrossel();
    }

    function fotoAnterior() {
        indiceAtual = (indiceAtual - 1 + totalFotos) % totalFotos;
        atualizarCarrossel();
    }

    function iniciarAutomatico() {
        clearInterval(intervalo);
        intervalo = setInterval(proximaFoto, 3000);
    }

    nextBtn.addEventListener("click", () => {
        proximaFoto();
        iniciarAutomatico();
    });

    prevBtn.addEventListener("click", () => {
        fotoAnterior();
        iniciarAutomatico();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            indiceAtual = index;
            atualizarCarrossel();
            iniciarAutomatico();
        });
    });

    atualizarCarrossel();
    iniciarAutomatico();
}


// ==============================
// MODO NOTURNO
// ==============================

const temaBtn = document.getElementById("tema-btn");

// Recupera o tema salvo
const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "escuro") {
    document.body.classList.add("dark-mode");
}

if (temaBtn) {

    const iconeTema = temaBtn.querySelector("i");

    function atualizarTema() {
        const modoEscuro = document.body.classList.contains("dark-mode");

        iconeTema.className = modoEscuro
            ? "fa-solid fa-sun"
            : "fa-solid fa-moon";

        temaBtn.setAttribute(
            "aria-label",
            modoEscuro ? "Ativar modo claro" : "Ativar modo noturno"
        );
    }

    atualizarTema();

    temaBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        const modoEscuro = document.body.classList.contains("dark-mode");

        localStorage.setItem(
            "tema",
            modoEscuro ? "escuro" : "claro"
        );

        atualizarTema();
    });
}
