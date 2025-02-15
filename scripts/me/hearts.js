const rechazar = document.getElementById("rechazar");
const aceptar = document.getElementById("aceptar");
const advertencia = document.getElementById("advertencia");
const sobre = document.getElementById("sobre");
const carta = document.getElementById("carta");
const corazon = document.getElementById("corazon");
const controlMusica = document.getElementById("controlMusica");
const musica = document.getElementById("musica");
const body = document.body;
const mensajeFinal = document.getElementById("mensajeFinal");
const cerrarCarta = document.createElement("span");

let toqueCorazon = 0;

function crearControlMusicaFinal() {
    const musicaControlFinal = document.createElement('button');
    musicaControlFinal.id = 'musicaControlFinal';
    musicaControlFinal.textContent = musica.paused ? "▶ Reproducir música" : "⏸ Pausar música";

    Object.assign(musicaControlFinal.style, {
        marginTop: '20px',
        padding: '8px 15px',
        fontSize: '14px',
        background: '#ff6b81',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '5px'
    });

    mensajeFinal.appendChild(musicaControlFinal);
    musicaControlFinal.addEventListener("click", () => {
        musica.paused ? musica.play() : musica.pause();
        musicaControlFinal.textContent = musica.paused ? "▶ Reproducir música" : "⏸ Pausar música";
    });
}

rechazar.addEventListener("click", () => {
    advertencia.style.display = "block";
    moverBoton();
});

aceptar.addEventListener("click", () => {
    advertencia.style.display = "none";
    rechazar.style.display = "none";
    aceptar.style.display = "none";
    sobre.style.display = "flex";
});

sobre.addEventListener("click", () => {
    sobre.classList.add("abrir");
    setTimeout(() => {
        sobre.style.display = "none";
        carta.style.display = "flex";
        body.style.transition = "background-color 1s ease";
        body.style.backgroundColor = "#ff6b81";
        cerrarCarta.textContent = "❌";
        cerrarCarta.id = "cerrarCarta";
        carta.appendChild(cerrarCarta);
        carta.appendChild(corazon);
        carta.appendChild(controlMusica);
        crearControlMusicaFinal();
    }, 500);
});

corazon.addEventListener("click", () => {
    toqueCorazon++;
    const cambios = ["❤️", "🌹", "❤️", "🌹", "😻"];
    corazon.innerHTML = cambios[Math.min(toqueCorazon, cambios.length - 1)];
});

controlMusica.addEventListener("click", () => {
    musica.paused ? musica.play() : musica.pause();
    controlMusica.textContent = musica.paused ? "▶ Reproducir música" : "⏸ Pausar música";
});

function moverBoton() {
    const maxX = window.innerWidth - rechazar.offsetWidth;
    const maxY = window.innerHeight - rechazar.offsetHeight;
    Object.assign(rechazar.style, {
        position: "absolute",
        left: `${Math.random() * maxX}px`,
        top: `${Math.random() * maxY}px`
    });
}

cerrarCarta.addEventListener("click", () => {
    carta.style.animation = "fadeOut 1s forwards";
    setTimeout(() => {
        carta.style.display = "none";
        mensajeFinal.style.display = "block";
        mensajeFinal.style.opacity = 1;
    }, 1000);
});
