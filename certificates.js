// --- ZERTIFIKAT DATENBANK ---
// Kategorie-Optionen: 'linux', 'network', 'dev', 'security', 'hardware'
const certificates = [
    {
        id: "LPIC-1",
        title: "LPIC-1 Linux Administrator (in progress)",
        issuer: "Linux Professional Institute",
        date: "2025",
        category: "linux",
        img: "https://via.placeholder.com/600x400/003300/00ff88?text=LPIC-1+Certificate", // Pfad zu deinem Bild
        verified: true
    },
    {
        id: "Cryptography",
        title: "Cryptography Course at Google Programming Hub",
        issuer: "Google Launchpad",
        date: "2024",
        category: "dev",
        img: "zertifikat3.jpg",
        verified: true
    },
    {
        id: "Cyber Security",
        title: "Google Programming Hub Security+",
        issuer: "Google Launchpad",
        date: "2025",
        category: "security",
        img: "zertifikat2.jpeg",
        verified: true
    },
    {
        id: "BigData",
        title: "Time Series Forecasting with Machine Learning",
        issuer: "Hannes Plattner Universität",
        date: "2025",
        category: "ML", // Passt auch zu Cloud/Infra
        img: "zertifikat4.jpg",
        verified: true
    },
    {
        id: "Time Series Analysis",
        title: "Series Analysis / Big Data",
        issuer: "Hannes Plattner Universität",
        date: "2025",
        category: "Big Data", // Passt auch zu Cloud/Infra
        img: "zertifikat5.jpg",
        verified: true
    }
];

// --- LOGIK (Nicht ändern) ---

const container = document.getElementById('certContainer');
const filterBtns = document.querySelectorAll('.filter-btn');
const modalTitle = document.getElementById('modalTitle');
const modalImg = document.getElementById('modalImg');
const modalID = document.getElementById('modalID');

// Render Funktion
function renderCerts(filter = 'all') {
    container.innerHTML = '';
    
    // Filtern
    const filteredData = filter === 'all' 
        ? certificates 
        : certificates.filter(cert => cert.category === filter);

    // Animation Delay Counter
    let delay = 0;

    filteredData.forEach(cert => {
        // Icon je nach Kategorie bestimmen
        let icon = 'bi-patch-check';
        if(cert.category === 'linux') icon = 'bi-terminal';
        if(cert.category === 'network') icon = 'bi-router';
        if(cert.category === 'security') icon = 'bi-shield-lock';
        if(cert.category === 'dev') icon = 'bi-code-slash';

        const html = `
            <div class="col-md-6 col-lg-4 fade-in-up" style="animation-delay: ${delay}s">
                <div class="cert-card" onclick="openCert('${cert.id}')">
                    <div class="cert-scanner"></div> <div class="cert-header d-flex justify-content-between align-items-start mb-3">
                        <i class="bi ${icon} fs-2 text-primary"></i>
                        <span class="badge bg-dark border border-secondary text-bright console-font">${cert.date}</span>
                    </div>
                    
                    <h4 class="text-white mb-1">${cert.title}</h4>
                    <p class="text-primary small mb-3">${cert.issuer}</p>
                    
                    <div class="cert-footer d-flex justify-content-between align-items-center mt-3 pt-3 border-top border-secondary">
                        <small class="text-bright console-font">ID: ${cert.id}</small>
                        ${cert.verified ? '<span class="text-success small"><i class="bi bi-check-circle-fill"></i> Verified</span>' : ''}
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += html;
        delay += 0.1; // Jedes Element kommt 0.1s später
    });
}

// Modal öffnen Funktion
window.openCert = function(id) {
    const cert = certificates.find(c => c.id === id);
    if(cert) {
        modalTitle.innerText = cert.title;
        modalImg.src = cert.img;
        modalID.innerText = cert.id;
        const myModal = new bootstrap.Modal(document.getElementById('certModal'));
        myModal.show();
    }
};

// Filter Buttons Event Listener
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Active Klasse wechseln
        filterBtns.forEach(b => b.classList.remove('active', 'btn-light'));
        filterBtns.forEach(b => b.classList.add('btn-outline-light'));
        
        btn.classList.remove('btn-outline-light');
        btn.classList.add('btn-light', 'active'); // Bootstrap active style

        // Filtern ausführen
        const filterValue = btn.getAttribute('data-filter');
        renderCerts(filterValue);
    });
});

// Initial Render
document.addEventListener("DOMContentLoaded", () => renderCerts('all'));