// Konfiguration der Terminal-Befehle
const termData = [
    { text: "whoami", isCommand: true },
    { text: "user: Fachinformatiker für Systemintegration", isCommand: false },
    { text: "location: Deutschland", isCommand: false },
    { text: "", isCommand: false }, // Leerzeile
    
    { text: "cat skills.txt", isCommand: true },
    { text: "- Server Administration (Linux/Windows)", isCommand: false },
    { text: "- Netzwerktechnik (VLAN, Routing, VPN)", isCommand: false },
    { text: "- Android Development", isCommand: false },
    { text: "- Hardware Hacking & IoT", isCommand: false },
    { text: "", isCommand: false },

    { text: "uptime", isCommand: true },
    { text: "up 16 years, 0 days, 0 load average", isCommand: false },
    { text: "", isCommand: false },
    
    { text: "./start_career.sh", isCommand: true },
    { text: "Loading modules... [OK]", isCommand: false },
    { text: "Initializing creative mode... [OK]", isCommand: false },
    { text: "Ready to work.", isCommand: false, color: "#00ff88" }
];

const terminalBody = document.getElementById('terminalOutput');
let lineIndex = 0;
let charIndex = 0;
const typingSpeed = 20; // Geschwindigkeit des Tippens
const lineDelay = 900;  // Pause zwischen Zeilen

function typeTerminal() {
    // Wenn alle Zeilen fertig sind, Cursor blinken lassen und stop
    if (lineIndex >= termData.length) {
        addCursor();
        return;
    }

    const currentLine = termData[lineIndex];
    
    // Erstelle neue Zeile im DOM, falls noch nicht geschehen
    let pLine = document.getElementById(`term-line-${lineIndex}`);
    if (!pLine) {
        pLine = document.createElement('div');
        pLine.id = `term-line-${lineIndex}`;
        pLine.classList.add('mb-1');
        
        if (currentLine.isCommand) {
            pLine.classList.add('text-primary', 'fw-bold');
            pLine.innerHTML = '<span class="text-secondary me-2">$</span>'; // Prompt
        } else {
            pLine.classList.add('text-bright'); // Nutzt unsere neue helle Farbe
			pLine.style.opacity = "0.9";
            if(currentLine.color) pLine.style.color = currentLine.color;
        }
        
        terminalBody.appendChild(pLine);
    }

    // Wenn es kein Command ist, zeige den Text sofort an (schneller Output)
    if (!currentLine.isCommand) {
        pLine.innerHTML += currentLine.text;
        lineIndex++;
        terminalBody.scrollTop = terminalBody.scrollHeight; // Auto-Scroll nach unten
        setTimeout(typeTerminal, lineDelay / 2); // Kurze Pause
    } 
    // Wenn es ein Command ist, tippe es Buchstabe für Buchstabe
    else {
        if (charIndex < currentLine.text.length) {
            pLine.innerHTML += currentLine.text.charAt(charIndex);
            charIndex++;
            setTimeout(typeTerminal, typingSpeed);
        } else {
            // Zeile fertig getippt
            charIndex = 0;
            lineIndex++;
            terminalBody.scrollTop = terminalBody.scrollHeight;
            setTimeout(typeTerminal, lineDelay);
        }
    }
}

function addCursor() {
    const cursorLine = document.createElement('div');
    cursorLine.innerHTML = '<span class="text-secondary me-2">$</span><span class="bg-primary" style="display:inline-block; width: 10px; height: 18px; animation: blink 1s infinite;">&nbsp;</span>';
    terminalBody.appendChild(cursorLine);
    terminalBody.scrollTop = terminalBody.scrollHeight;
}

// Start der Animation beim Laden
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(typeTerminal, 1000);
});
