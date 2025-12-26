// --- KONFIGURATION ---
// Hier das Datum eintragen (Format: "Monat Tag, Jahr Uhrzeit")
const launchDate = new Date("12 27, 2025 12:00").getTime();

// --- LOGIK (Nicht ändern) ---
document.addEventListener("DOMContentLoaded", function() {
    
    // Prüfen, ob Zeit schon abgelaufen ist
    const nowCheck = new Date().getTime();
    if (nowCheck > launchDate) {
        return; // Wenn Datum vorbei, mach nichts (zeige die Seite)
    }

    // 1. CSS für den Lock-Screen erstellen
    const style = document.createElement('style');
    style.innerHTML = `
        #system-lock {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background-color: #0b1120;
            z-index: 99999;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #00ff88;
            font-family: 'JetBrains Mono', monospace;
            text-align: center;
        }
        .lock-container {
            border: 1px solid #333;
            padding: 40px;
            background: rgba(0,0,0,0.5);
            border-radius: 10px;
            box-shadow: 0 0 50px rgba(0, 255, 136, 0.1);
        }
        .lock-title {
            font-size: 2rem; margin-bottom: 20px; text-transform: uppercase;
            letter-spacing: 5px; animation: blink 2s infinite;
        }
        .timer-box {
            display: flex; gap: 20px; font-size: 3rem; font-weight: bold;
            color: white; margin: 20px 0;
        }
        .time-unit { display: flex; flex-direction: column; font-size: 0.8rem; color: #888; }
        .progress-bar-container {
            width: 100%; height: 4px; background: #333; margin-top: 20px;
        }
        .progress-bar-fill {
            height: 100%; background: #00ff88; width: 0%; animation: load 2s infinite;
        }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        @keyframes load { 0% { width: 0%; opacity: 0.5;} 50% { width: 100%; opacity: 1; } 100% { width: 0%; opacity: 0.5;} }
    `;
    document.head.appendChild(style);

    // 2. HTML Overlay erstellen
    const overlay = document.createElement('div');
    overlay.id = 'system-lock';
    overlay.innerHTML = `
        <div class="lock-container">
            <div class="lock-title"><i class="bi bi-lock-fill"></i> System Locked</div>
            <p>Deployment in progress...</p>
            
            <div class="timer-box">
                <div><span id="d">00</span><span class="time-unit">DAYS</span></div> :
                <div><span id="h">00</span><span class="time-unit">HRS</span></div> :
                <div><span id="m">00</span><span class="time-unit">MIN</span></div> :
                <div><span id="s">00</span><span class="time-unit">SEC</span></div>
            </div>

            <p style="color: #666; font-size: 0.8rem;">ACCESS DENIED UNTIL LAUNCH</p>
            <div class="progress-bar-container">
                <div class="progress-bar-fill"></div>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);
    
    // Scrollen verbieten
    document.body.style.overflow = "hidden";

    // 3. Countdown Funktion
    const timer = setInterval(function() {
        const now = new Date().getTime();
        const distance = launchDate - now;

        // Zeitberechnung
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Anzeige aktualisieren
        document.getElementById("d").innerText = days < 10 ? "0" + days : days;
        document.getElementById("h").innerText = hours < 10 ? "0" + hours : hours;
        document.getElementById("m").innerText = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("s").innerText = seconds < 10 ? "0" + seconds : seconds;

        // Wenn Zeit abgelaufen
        if (distance < 0) {
            clearInterval(timer);
            // Overlay entfernen
            overlay.style.transition = "opacity 1s ease";
            overlay.style.opacity = "0";
            setTimeout(() => {
                overlay.remove();
                document.body.style.overflow = "auto"; // Scrollen wieder erlauben
            }, 1000);
        }
    }, 1000);
});