const trafficContainer = document.getElementById('trafficFlow');

const sources = ['192.168.178.1', '192.168.178.50', '192.168.178.12', '192.168.178.5', '8.8.8.8'];
const destinations = ['192.168.178.255', '142.250.185.78', '192.168.178.1', '1.1.1.1', '192.168.178.50'];
const protocols = ['TCP', 'UDP', 'TLSv1.3', 'DNS', 'HTTP', 'ICMP', 'SSH'];

function addPacket() {
    const now = new Date();
    const time = now.getHours().toString().padStart(2, '0') + ":" + 
                 now.getMinutes().toString().padStart(2, '0') + ":" + 
                 now.getSeconds().toString().padStart(2, '0');
    
    const src = sources[Math.floor(Math.random() * sources.length)];
    const dest = destinations[Math.floor(Math.random() * destinations.length)];
    const proto = protocols[Math.floor(Math.random() * protocols.length)];
    const length = Math.floor(Math.random() * 1400) + 64;

    // Farbe basierend auf Protokoll
    let colorClass = 'text-success';
    if(proto === 'TCP') colorClass = 'text-primary';
    if(proto === 'SSH') colorClass = 'text-warning';
    if(proto === 'ICMP') colorClass = 'text-danger';

    const packetHTML = `
        <div class="row py-1 border-bottom border-secondary opacity-0 fade-in-row" style="transition: opacity 0.5s ease;">
            <div class="col-2 col-md-2 text-muted">${time}</div>
            <div class="col-4 col-md-3 ${colorClass}">${src}</div>
            <div class="col-4 col-md-3 text-bright">${dest}</div>
            <div class="col-2 col-md-2 d-none d-md-block text-muted">${proto}</div>
            <div class="col-2 col-md-2 text-end text-muted">${length}</div>
        </div>
    `;

    trafficContainer.insertAdjacentHTML('afterbegin', packetHTML);

    // Fade-in Effekt auslösen
    setTimeout(() => {
        const firstChild = trafficContainer.firstChild;
        if(firstChild && firstChild.classList) firstChild.classList.remove('opacity-0');
    }, 50);

    // Damit der Browser nicht abstürzt: Nur die letzten 15 Pakete behalten
    if (trafficContainer.children.length > 15) {
        trafficContainer.removeChild(trafficContainer.lastChild);
    }
}

// Alle 0.8 bis 2.5 Sekunden ein neues Paket
function scheduleNextPacket() {
    const delay = Math.random() * (2500 - 800) + 800;
    setTimeout(() => {
        addPacket();
        scheduleNextPacket();
    }, delay);
}

document.addEventListener('DOMContentLoaded', scheduleNextPacket);