// Deine bereinigte Server-Liste
let nodes = [
    {
        id: "node-docker",
        name: "DOCKER-HOST-PROD",
        os: "Debian 12",
        role: "Container Services",
        ip: "192.168.178.50",
        status: "Online"
    },
    {
        id: "node-nas",
        name: "STORAGE-NAS",
        os: "TrueNAS Scale",
        role: "ZFS Storage / Backup",
        ip: "192.168.178.5",
        status: "Online"
    }
];

function renderServers() {
    const container = document.getElementById('serverContainer');
    container.innerHTML = '';

    nodes.forEach(node => {
        // Initiale Werte
        const cpu = Math.floor(Math.random() * 15) + 5; 
        const ram = Math.floor(Math.random() * 10) + 40;

        const html = `
            <div class="col-md-6">
                <div class="server-card border border-secondary p-4 bg-darker rounded shadow-sm" id="${node.id}">
                    <div class="d-flex justify-content-between align-items-start mb-3">
                        <i class="bi bi-cpu text-primary fs-2"></i>
                        <span class="badge bg-success opacity-75 pulse-bg">${node.status}</span>
                    </div>
                    <h4 class="text-white mb-1">${node.name}</h4>
                    <p class="text-bright small mb-4">${node.os} | ${node.role}</p>
                    
                    <div class="mb-3">
                        <div class="d-flex justify-content-between small text-bright mb-1">
                            <span>CPU Load</span>
                            <span class="cpu-val">${cpu}%</span>
                        </div>
                        <div class="progress bg-dark" style="height: 6px;">
                            <div class="progress-bar bg-primary transition-all" style="width: ${cpu}%"></div>
                        </div>
                    </div>
                    
                    <div class="mb-4">
                        <div class="d-flex justify-content-between small text-bright mb-1">
                            <span>RAM Usage</span>
                            <span class="ram-val">${ram}%</span>
                        </div>
                        <div class="progress bg-dark" style="height: 6px;">
                            <div class="progress-bar bg-info transition-all" style="width: ${ram}%"></div>
                        </div>
                    </div>

                    <div class="pt-2 border-top border-secondary d-flex justify-content-between align-items-center">
                        <code class="text-primary">IP: ${node.ip}</code>
                        <small class="text-bright console-font">Net: 192.168.178.0/24</small>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += html;
    });
}

// Funktion für die Live-Schwankungen
function updateLiveMetrics() {
    nodes.forEach(node => {
        const card = document.getElementById(node.id);
        if (card) {
            // Generiere kleine Schwankungen (-3% bis +3%)
            const cpuEl = card.querySelector('.cpu-val');
            const cpuBar = card.querySelector('.bg-primary');
            const ramEl = card.querySelector('.ram-val');
            const ramBar = card.querySelector('.bg-info');

            let currentCpu = parseInt(cpuEl.innerText);
            let currentRam = parseInt(ramEl.innerText);

            // Zufällige Änderung berechnen
            let newCpu = Math.max(2, Math.min(98, currentCpu + (Math.floor(Math.random() * 7) - 3)));
            let newRam = Math.max(10, Math.min(95, currentRam + (Math.floor(Math.random() * 5) - 2)));

            // UI updaten
            cpuEl.innerText = `${newCpu}%`;
            cpuBar.style.width = `${newCpu}%`;
            ramEl.innerText = `${newRam}%`;
            ramBar.style.width = `${newRam}%`;
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderServers();
    setInterval(updateLiveMetrics, 3000); // Alle 3 Sekunden updaten
});
// --- UPTIME LOGIK ---

// Setze hier das Datum ein, an dem dein System gestartet wurde (Jahr, Monat-1, Tag, Stunde, Minute)
const bootTime = new Date(2024, 9, 15, 08, 30, 0); 

function updateUptime() {
    const now = new Date();
    const diff = now - bootTime;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    // Formatierung mit führenden Nullen
    const displayHours = hours.toString().padStart(2, '0');
    const displayMinutes = minutes.toString().padStart(2, '0');
    const displaySeconds = seconds.toString().padStart(2, '0');

    const uptimeString = `up ${days} days, ${displayHours}:${displayMinutes}:${displaySeconds}`;
    
    const uptimeEl = document.getElementById('liveUptime');
    if (uptimeEl) {
        uptimeEl.innerText = uptimeString;
    }
}

// In den DOMContentLoaded Event Listener einfügen
document.addEventListener('DOMContentLoaded', () => {
    renderServers(); // Deine bestehende Funktion
    setInterval(updateLiveMetrics, 3000); // Deine bestehende Funktion
    
    // Uptime jede Sekunde aktualisieren
    updateUptime(); 
    setInterval(updateUptime, 1000);
});