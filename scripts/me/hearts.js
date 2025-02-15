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

// Función para crear el botón de control de música en el mensaje final
function crearControlMusicaFinal() {
    const musicaControlFinal = document.createElement('button');
    musicaControlFinal.id = 'musicaControlFinal';

    // Verificamos el estado de la música y ajustamos el texto del botón
    if (musica.paused) {
        musicaControlFinal.textContent = "▶ Reproducir música"; // Si está pausada
    } else {
        musicaControlFinal.textContent = "⏸ Pausar música"; // Si ya está reproduciendo
    }

    musicaControlFinal.style.marginTop = '20px';
    musicaControlFinal.style.padding = '8px 15px';
    musicaControlFinal.style.fontSize = '14px';
    musicaControlFinal.style.background = '#ff6b81';
    musicaControlFinal.style.color = 'white';
    musicaControlFinal.style.border = 'none';
    musicaControlFinal.style.cursor = 'pointer';
    musicaControlFinal.style.borderRadius = '5px';

    // Agregamos el botón al mensaje final
    mensajeFinal.appendChild(musicaControlFinal);

    // Añadimos el evento de clic para controlar la música
    musicaControlFinal.addEventListener("click", () => {
        if (musica.paused) {
            musica.play();
            musicaControlFinal.textContent = "⏸ Pausar música"; // Cambio a Pausar cuando se reproduce
        } else {
            musica.pause();
            musicaControlFinal.textContent = "▶ Reproducir música"; // Cambio a Reproducir cuando se pausa
        }
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
        corazon.innerHTML = "❤️"; // Reestablecer el corazón
        carta.appendChild(corazon);
        controlMusica.style.alignSelf = "flex-end";
        carta.appendChild(controlMusica);

        // Crear el div para el mensaje "Te amo"
        if (!mensajeFinal) {
            const divMensajeFinal = document.createElement('div');
            divMensajeFinal.id = 'mensajeFinal';
            divMensajeFinal.setAttribute('contenteditable', 'true');  // Hacerlo editable
            divMensajeFinal.style.display = 'none';
            divMensajeFinal.style.textAlign = 'center';
            divMensajeFinal.style.fontSize = '40px';
            divMensajeFinal.style.fontWeight = 'bold';
            divMensajeFinal.style.color = '#ff6b81';
            divMensajeFinal.style.padding = '20px';
            divMensajeFinal.style.borderRadius = '10px';
            divMensajeFinal.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            divMensajeFinal.style.border = '2px solid #ff6b81';
            divMensajeFinal.textContent = 'Te amo 💖';
            carta.appendChild(divMensajeFinal);
            mensajeFinal = divMensajeFinal; // Asignar la referencia
        }

        // Crear el control de música en el mensaje final
        crearControlMusicaFinal();

    }, 500);
});

corazon.addEventListener("click", () => {
    corazon.innerHTML = corazon.innerHTML === "❤️" ? "🌹" : "❤️";
});

controlMusica.addEventListener("click", () => {
    if (musica.paused) {
        musica.play();
        controlMusica.textContent = "⏸ Pausar música";
    } else {
        musica.pause();
        controlMusica.textContent = "▶ Reproducir música";
    }
});

function moverBoton() {
    const maxX = window.innerWidth - rechazar.offsetWidth;
    const maxY = window.innerHeight - rechazar.offsetHeight;
    rechazar.style.position = "absolute";
    rechazar.style.left = `${Math.random() * maxX}px`;
    rechazar.style.top = `${Math.random() * maxY}px`;
}

cerrarCarta.addEventListener("click", () => {
    // Primero animamos el cierre de la carta
    carta.style.animation = "fadeOut 1s forwards";
    
    // Después de 1 segundo, ocultamos la carta y mostramos el mensaje "Te amo"
    setTimeout(() => {
        carta.style.display = "none";
        
        // Ahora mostramos el mensaje "Te amo" al instante
        mensajeFinal.style.display = "block";
        mensajeFinal.style.transition = "opacity 2s";
        mensajeFinal.style.opacity = 1; // Hace que el mensaje de "Te amo" aparezca suavemente
    }, 1000); // Tiempo suficiente para la animación de cierre de la carta
});
