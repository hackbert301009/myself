// --- 1. Die Datenbank (Simuliert) ---
// Hier trägst du deine Blog-Posts ein!
const defaultPosts = [
    {
        id: 1,
        title: "Mein neuer Proxmox Server Build",
        date: "2025-12-23",
        category: "Server",
        content: "Endlich ist die Hardware angekommen! Ich habe heute meinen neuen Homelab-Server aufgebaut. Mit 64GB RAM und einem Ryzen 9 bietet er genug Leistung für diverse VMs und Container. Die Installation von Proxmox VE 8 lief reibungslos. Als nächstes plane ich die Migration meines Home Assistant.",
        likes: 12,
        comments: [
            { user: "Gast", text: "Welches Gehäuse hast du benutzt?" }
        ]
    },
    {
        id: 2,
        title: "Update meiner Android App",
        date: "2025-12-26",
        category: "App Dev",
        content: "Version 2.0 meiner Netzwerk-Scanner App ist live. Ich habe den Code von Java auf Kotlin migriert und Dark Mode Support hinzugefügt. Besonders stolz bin ich auf die optimierte Ping-Routine, die jetzt asynchron läuft und das UI nicht mehr blockiert.",
        likes: 5,
        comments: []
    },
    {
        id: 3,
        title: "VLANs richtig konfigurieren",
        date: "2024-12-25",
        category: "Netzwerk",
        content: "Sicherheit im Heimnetzwerk ist essenziell. Heute zeige ich, wie man IoT-Geräte in ein separates VLAN sperrt, damit der smarte Kühlschrank nicht auf das NAS zugreifen kann. Die Konfiguration über den Unifi Controller und die Firewall-Regeln erkläre ich Schritt für Schritt...",
        likes: 24,
        comments: [
            { user: "Admin", text: "Gute Anleitung, danke!" }
        ]
    },
    {
        id: 4,
        title: "Herzlich Willkommen!",
        date: "2025-12-27",
        category: "Wichtig!",
        content: "Hallo an alle, hier findet ihr immer wieder spannende neue Blogs, rund um mich, euch und was so in der Welt passiert.Ich bin aktuell noch viel am Verbessern im Backend. Wenn jemand sich mit CMS Systemen auskennt, meldet euch immer gerne. Macht es gut!",
        likes: 0,
        comments: [
            { user: "Admin", text: "Lest es euch gerne durch!" }
        ]
    }
];

// Lade Daten aus dem LocalStorage oder nimm die Standards
let posts = JSON.parse(localStorage.getItem('myPortfolioPosts')) || defaultPosts;

// --- 2. Initialisierung ---
const blogContainer = document.getElementById('blogContainer');
const searchInput = document.getElementById('searchInput');
const filterSelect = document.getElementById('filterSelect');
const postCountLabel = document.getElementById('postCount');

// Event Listener
searchInput.addEventListener('input', renderPosts);
filterSelect.addEventListener('change', renderPosts);

// --- 3. Render Funktion (Zeigt die Posts an) ---
function renderPosts() {
    blogContainer.innerHTML = ''; // Container leeren
    
    // 1. Filtern (Suche)
    let searchTerm = searchInput.value.toLowerCase();
    let filteredPosts = posts.filter(post => 
        post.title.toLowerCase().includes(searchTerm) || 
        post.content.toLowerCase().includes(searchTerm) ||
        post.category.toLowerCase().includes(searchTerm)
    );

    // 2. Sortieren
    const sortMode = filterSelect.value;
    filteredPosts.sort((a, b) => {
        if (sortMode === 'newest') return new Date(b.date) - new Date(a.date);
        if (sortMode === 'oldest') return new Date(a.date) - new Date(b.date);
        if (sortMode === 'longest') return b.content.length - a.content.length;
    });

    // Counter updaten
    postCountLabel.innerText = filteredPosts.length;

    // 3. HTML bauen
    filteredPosts.forEach(post => {
        // Formatiere Datum
        const dateObj = new Date(post.date);
        const dateStr = dateObj.toLocaleDateString('de-DE');

        // Kommentare generieren
        let commentsHtml = '';
        post.comments.forEach(c => {
            commentsHtml += `<div class="comment-item small border-start border-secondary ps-2 mb-2 text-white-50">
                <strong>${c.user}:</strong> ${c.text}
            </div>`;
        });

        const cardHtml = `
            <div class="col-lg-6"> <div class="card blog-card h-100">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-start mb-2">
                            <span class="badge bg-primary text-dark">${post.category}</span>
                            <small class="text-bright console-font">${dateStr}</small>
                        </div>
                        <h3 class="card-title h4 text-white mb-3">${post.title}</h3>
                        <p class="card-text text-light opacity-75">${post.content}</p>
                        
                        <hr class="border-secondary">
                        
                        <div class="d-flex justify-content-between align-items-center">
                            <button class="btn btn-sm btn-outline-success like-btn" onclick="likePost(${post.id})">
                                <i class="bi bi-heart-fill"></i> <span id="likes-${post.id}">${post.likes}</span>
                            </button>
                            <button class="btn btn-sm btn-outline-light" type="button" data-bs-toggle="collapse" data-bs-target="#comments-${post.id}">
                                <i class="bi bi-chat-left-text"></i> Kommentare (${post.comments.length})
                            </button>
                        </div>

                        <div class="collapse mt-3" id="comments-${post.id}">
                            <div class="card card-body bg-dark border border-secondary p-2">
                                <div class="comments-list mb-2" id="comment-list-${post.id}">
                                    ${commentsHtml}
                                </div>
                                <div class="input-group input-group-sm">
                                    <input type="text" class="form-control bg-darker text-white border-secondary" placeholder="Kommentar..." id="input-${post.id}">
                                    <button class="btn btn-primary" onclick="addComment(${post.id})">Senden</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        blogContainer.innerHTML += cardHtml;
    });
}

// --- 4. Aktionen (Like & Comment) ---

window.likePost = function(id) {
    const post = posts.find(p => p.id === id);
    if(post) {
        post.likes++;
        saveAndRender(); // Speichern & Neu anzeigen
        
        // Kleiner visueller Effekt (nur via JS Trigger möglich wenn Element da ist)
        const btn = document.querySelector(`button[onclick="likePost(${id})"]`);
        if(btn) btn.classList.add('pulse-anim');
    }
};

window.addComment = function(id) {
    const inputField = document.getElementById(`input-${id}`);
    const text = inputField.value;
    
    if (text.trim() === "") return;

    const post = posts.find(p => p.id === id);
    if(post) {
        post.comments.push({
            user: "Besucher", // Hier könnte später ein echter Name stehen
            text: text
        });
        inputField.value = ''; // Feld leeren
        saveAndRender();
        
        // Kommentarbereich offen lassen nach Render (Trick)
        setTimeout(() => {
            const collapseElement = document.getElementById(`comments-${id}`);
            const bsCollapse = new bootstrap.Collapse(collapseElement, { toggle: false });
            bsCollapse.show();
        }, 100);
    }
};

// Hilfsfunktion: Speichern im LocalStorage
function saveAndRender() {
    localStorage.setItem('myPortfolioPosts', JSON.stringify(posts));
    renderPosts();
}

// Start
renderPosts();