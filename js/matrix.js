const matrixCanvas = document.getElementById('matrixCanvas');
const matrixCtx = matrixCanvas.getContext('2d');

matrixCanvas.width = matrixCanvas.clientWidth;
matrixCanvas.height = matrixCanvas.clientHeight;

const fontSize = 14;
const columns = matrixCanvas.width / fontSize;

const drops = [];
for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

const matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#!+_)人類えることがないようにするためには、する層大きな自由のうちで社会的進歩と生活水準の向上とを促進することを決意したので、(&*¨&%¨%%$@##%@1¬¢³²³§';
const matrixCharsArray = matrixChars.split('');

function drawMatrix() {
    matrixCtx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    matrixCtx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);

    matrixCtx.fillStyle = '#0F0';
    matrixCtx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = matrixCharsArray[Math.floor(Math.random() * matrixCharsArray.length)];
        matrixCtx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }

    requestAnimationFrame(drawMatrix);
}

drawMatrix();
