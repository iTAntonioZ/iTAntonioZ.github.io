const txtanimation = document.getElementById('text-animate');
const txt = [ 'Desarrollo Web FullStack', 'Desarrollo de videojuegos', 'Desarrollado de Discord Bots', 'Desarollo de aplicaciones mobiles'];
let i = 0;

function typeText(text, callback) {
    let j = 0;
    const interval = setInterval(() => {
        txtanimation.textContent = text.slice(0, j + 1);
        j++;
        if (j === text.length) {
            clearInterval(interval);
            setTimeout(() => eraseText(callback), 1000); // Pausa antes de borrar
        }
    }, 100);
}

function eraseText(callback) {
    let j = txtanimation.textContent.length;
    const interval = setInterval(() => {
        txtanimation.textContent = txtanimation.textContent.slice(0, j - 1);
        j--;
        if (j === 0) {
            clearInterval(interval);
            callback();
        }
    }, 50);
}

function loopText() {
    typeText(txt[i], () => {
        i = (i + 1) % txt.length;
        loopText();
    });
}

loopText();
