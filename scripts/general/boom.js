const background = document.getElementById('background');
let clickCount = 0;

background.addEventListener('click', (event) => {
    clickCount++;

    if (clickCount === 3) {
        // Crea la explosión en la posición del cursor
        createExplosion(event.clientX, event.clientY);
        clickCount = 0; // Reinicia el contador después de la explosión
    }
});

function createExplosion(x, y) {
    const explosion = document.createElement('div');
    explosion.className = 'explosion';

    // Calcula las posiciones basándose en el cursor
    explosion.style.left = `${x}px`;
    explosion.style.top = `${y}px`;

    // Posiciona la explosión en el contenedor principal
    explosion.style.transform = 'translate(-50%, -50%)'; // Ajusta el centro
    explosion.style.position = 'absolute';

    background.appendChild(explosion);

    // Elimina la explosión después de que la animación termine
    explosion.addEventListener('animationend', () => {
        explosion.remove();
    });
}
