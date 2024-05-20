const canvas = document.getElementById('radarCanvas');
const ctx = canvas.getContext('2d');

// Ajusta o tamanho do canvas para caber dentro do container
canvas.width = canvas.parentElement.offsetWidth;
canvas.height = canvas.parentElement.offsetHeight;

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = Math.min(centerX, centerY) - 10;
let angle = 0;

function drawRadar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Desenho das Circunferências e linhas dentro do radar
    ctx.strokeStyle = 'green'; // Cor das circunferências e linhas
    ctx.lineWidth = 2; // Largura das circunferências e linhas
    for (let i = 1; i <= 5; i++) {
        const circleRadius = radius * i / 5;
        
        // Desenho da circunferência
        ctx.beginPath();
        ctx.arc(centerX, centerY, circleRadius, 0, 2 * Math.PI);
        ctx.stroke();
        
        // Desenho da linha horizontal dentro do raio atual
        ctx.beginPath();
        ctx.moveTo(centerX - circleRadius, centerY);
        ctx.lineTo(centerX + circleRadius, centerY);
        ctx.stroke();

        // Desenho da linha vertical dentro do raio atual
        ctx.beginPath();
        ctx.moveTo(centerX, centerY - circleRadius);
        ctx.lineTo(centerX, centerY + circleRadius);
        ctx.stroke();
    }

    // Desenho dos pontos cardeais
    ctx.fillStyle = 'green';
    ctx.font = '20px Arial'; // Definindo a fonte e o tamanho do texto
    ctx.textAlign = 'center'; // Alinhamento horizontal central
    ctx.textBaseline = 'middle'; // Alinhamento vertical central

    // Norte
    ctx.fillText('N', centerX, centerY - radius - 15);
    // Sul
    ctx.fillText('S', centerX, centerY + radius + 15);
    // Leste
    ctx.fillText('E', centerX + radius + 15, centerY);
    // Oeste
    ctx.fillText('W', centerX - radius - 15, centerY);    

    // Desenho das linhas do radar (linha vermelha)
    ctx.strokeStyle = 'rgba(0, 255, 0, 0.1)';
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + radius * Math.cos(angle), centerY + radius * Math.sin(angle));
    ctx.stroke();

    // Desenho da varredura do radar (sombra verde)
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, angle, angle + Math.PI / 6);
    ctx.closePath();
    ctx.fillStyle = 'rgba(0, 255, 0, 0.1)';
    ctx.fill();

    angle += 0.01;
    if (angle >= 2 * Math.PI) {
        angle = 0;
    }

    requestAnimationFrame(drawRadar);
}

drawRadar();
