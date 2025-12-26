// --- 1. Typewriter Effekt ---
const textArray = ["konfiguriere Server.", "programmiere Apps.", "vernetze Systeme.", "löte Hardware."];
const typeSpan = document.getElementById("typewriter");
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if(typeSpan) typeSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if(typeSpan) typeSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});


// --- 2. Hacker Network Background (Canvas) ---
const canvas = document.getElementById('networkCanvas');
const ctx = canvas.getContext('2d');

let particlesArray;

// Canvas Größe anpassen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

// Partikel Klasse
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.directionX = (Math.random() * 2) - 1; // Geschwindigkeit X
        this.directionY = (Math.random() * 2) - 1; // Geschwindigkeit Y
        this.size = (Math.random() * 3) + 1; // Größe
        this.color = '#00ff88'; // Hacker Grün
    }

    // Zeichnen
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    // Bewegen & Überprüfen ob am Rand
    update() {
        if (this.x > canvas.width || this.x < 0) {
            this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.directionY = -this.directionY;
        }

        this.x += this.directionX * 0.4; // * 0.4 macht es langsamer/smoother
        this.y += this.directionY * 0.4;
        this.draw();
    }
}

// Array füllen
function init() {
    particlesArray = [];
    let numberOfParticles = (canvas.height * canvas.width) / 15000; // Dichte anpassen
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }
}

// Verbindungs-Linien zeichnen
function connect() {
    let opacityValue = 1;
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
            let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) + 
                           ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
            
            if (distance < (canvas.width/7) * (canvas.height/7)) {
                opacityValue = 1 - (distance/20000);
                ctx.strokeStyle = 'rgba(0, 255, 136,' + opacityValue + ')'; // Grüne Linien
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }
    connect();
}

init();
animate();
// --- LIVE AGE COUNTER ---
function updateAge() {
    const birthDate = new Date(2009, 10, 30); // ERSETZE DIES: (Jahr, Monat-1, Tag)
    const now = new Date();
    
    const diff = now - birthDate;
    
    // Berechnung in Jahren mit vielen Nachkommastellen
    const ageInYears = diff / (1000 * 60 * 60 * 24 * 365.25);
    
    const ageCounterEl = document.getElementById('ageCounter');
    if (ageCounterEl) {
        // Zeigt 9 Nachkommastellen für den "Live-Effekt"
        ageCounterEl.innerText = ageInYears.toFixed(8) + " Jahre";
    }
}

// Intervall für den Counter (alle 50ms für flüssige Optik)
setInterval(updateAge, 50);