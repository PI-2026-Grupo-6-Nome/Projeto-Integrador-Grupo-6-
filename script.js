
const track = document.getElementById("track");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dots = document.querySelectorAll(".dot");

let indiceAtual = 0;
const totalFotos = track.children.length;

function atualizarCarrossel() {
    track.style.transform = `translateX(-${indiceAtual * 100}%)`;

    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === indiceAtual);
    });
}

nextBtn.addEventListener("click", function() {
    indiceAtual++;

    if (indiceAtual >= totalFotos) {
        indiceAtual = 0;
    }

    atualizarCarrossel();
});

prevBtn.addEventListener("click", function() {
    indiceAtual--;

    if (indiceAtual < 0) {
        indiceAtual = totalFotos - 1;
    }

    atualizarCarrossel();
});

dots.forEach((dot, index) => {
    dot.addEventListener("click", function() {
        indiceAtual = index;
        atualizarCarrossel();
    });
});
