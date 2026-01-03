// --- 1. Die Datenbank ---
const defaultPosts = [
    {
        id: 1,
        title: "Mein neuer Proxmox Server Build",
        date: "2025-12-23",
        category: "Server",
        // Hier habe ich dein Hacker-Setup Bild eingefügt:
        image: "server.jpeg", 
        content: "Endlich ist die Hardware angekommen! Ich habe heute meinen neuen Homelab-Server aufgebaut. Mit 64GB RAM und einem Ryzen 9 bietet er genug Leistung für diverse VMs und Container. Die Installation von Proxmox VE 8 lief reibungslos.",
        likes: 12,
        comments: [
            { user: "Gast", text: "Welches Gehäuse hast du benutzt?" }
        ]
    },
    {
        id: 3,
        title: "Launch von meiner ersten app",
        date: "2026-01-05",
        category: "APP",
        // Hier habe ich dein Hacker-Setup Bild eingefügt:
        image: "my-love.png.png", 
        content: "In 2 Wocehn ist es soweit, ich launche meine erste eigene Webseite. Es waren schmerz, verzweiflung und anstrengung, doch immer mit dem Ziel und dem Grund vor Augen und nun ist es bald soweit, meine erste eigene Webseite landet im Google Play Store, ich freue mich sehr!",
        likes: 7,
        comments:[]       
    },
    {
        id: 2,
        title: "Contributing bei Nebula OS",
        date: "2026-01-03",
        category: "OS",
        // Hier habe ich dein Hacker-Setup Bild eingefügt:
        image: "nebula.png", 
        content: "Ich war die letzten 3 Monate der glücklichen, die in der Lage waren bei Nebula OS, einer eigenen Linux Distribution mit eigenem Compiler und Interpretersprache mitzuarbeiten und meinen Teil zu dem Projekt zu leisten. Es hat mir wirklich sehr viel Spaß gemacht und auch großen Dank, an das Team!!",
        likes: 3,
        comments: [
            { user: "Gast", text: "Ist die Distro schon frei verfügbar?" }
        ]
    },
    {
        id: 4,
        title: "Herzlich Willkommen!",
        date: "2025-12-27",
        category: "Wichtig!",
        // Hier wieder das Setup Bild als Beispiel (oder ein anderes)
        image: "welcome.jpg", 
        content: "Hallo an alle! Hier findet ihr immer wieder spannende neue Blogs rund um Tech, meine Projekte und was so in der Welt passiert. Meldet euch gerne bei Fragen!",
        likes: 0,
        comments: [
            { user: "Admin", text: "Viel Spaß beim Lesen!" }
        ]
    }
];

// Lade Daten
let posts = JSON.parse(localStorage.getItem('myPortfolioPosts')) || defaultPosts;

// --- 2. Initialisierung ---
const blogContainer = document.getElementById('blogContainer');
const searchInput = document.getElementById('searchInput');
const filterSelect = document.getElementById('filterSelect');
const postCountLabel = document.getElementById('postCount');

// Event Listener
searchInput.addEventListener('input', renderPosts);
filterSelect.addEventListener('change', renderPosts);

// --- 3. Render Funktion ---
function renderPosts() {
    blogContainer.innerHTML = '';
    
    // Filtern
    let searchTerm = searchInput.value.toLowerCase();
    let filteredPosts = posts.filter(post => 
        post.title.toLowerCase().includes(searchTerm) || 
        post.content.toLowerCase().includes(searchTerm) ||
        post.category.toLowerCase().includes(searchTerm)
    );

    // Sortieren
    const sortMode = filterSelect.value;
    filteredPosts.sort((a, b) => {
        if (sortMode === 'newest') return new Date(b.date) - new Date(a.date);
        if (sortMode === 'oldest') return new Date(a.date) - new Date(b.date);
        if (sortMode === 'likes') return b.likes - a.likes;
        if (sortMode === 'longest') return b.content.length - a.content.length;
    });

    postCountLabel.innerText = filteredPosts.length;

    // HTML Generieren
    filteredPosts.forEach(post => {
        const dateStr = new Date(post.date).toLocaleDateString('de-DE');

        // Kommentare bauen
        let commentsHtml = '';
        post.comments.forEach(c => {
            commentsHtml += `
            <div class="comment-item mb-2">
                <span class="text-primary small console-font">${c.user}:</span> 
                <span class="text-light small opacity-75">${c.text}</span>
            </div>`;
        });

        // Bild Logik: Prüfen ob Bild vorhanden ist
        let imageHtml = '';
        if (post.image) {
            imageHtml = `
            <div class="blog-img-wrapper">
                <img src="${post.image}" alt="${post.title}" class="blog-img">
                <div class="blog-category-badge">${post.category}</div>
            </div>
            `;
        } else {
            // Wenn kein Bild, Badge einfach oben anzeigen
            imageHtml = `
            <div class="p-4 pb-0">
                <span class="badge bg-dark border border-secondary text-primary">${post.category}</span>
            </div>
            `;
        }

        // Card HTML
        const cardHtml = `
            <div class="col-lg-6 col-xl-4 d-flex align-items-stretch"> 
                <div class="card blog-card w-100 overflow-hidden">
                    
                    ${imageHtml}

                    <div class="card-body p-4 d-flex flex-column">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <small class="text-bright console-font">${dateStr}</small>
                            <small class="text-bright console-font">ID: ${post.id}</small>
                        </div>
                        
                        <h3 class="h4 text-white fw-bold mb-3">${post.title}</h3>
                        <p class="text-light opacity-75 flex-grow-1">${post.content}</p>
                        
                        <div class="border-top border-secondary pt-3 mt-3">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <button class="btn btn-sm btn-outline-success like-btn rounded-pill px-3" onclick="likePost(${post.id})">
                                    <i class="bi bi-heart-fill"></i> <span id="likes-${post.id}" class="ms-1 fw-bold">${post.likes}</span>
                                </button>
                                <button class="btn btn-sm btn-outline-light rounded-pill px-3" type="button" data-bs-toggle="collapse" data-bs-target="#comments-${post.id}">
                                    <i class="bi bi-chat-left-dots"></i> ${post.comments.length}
                                </button>
                            </div>

                            <div class="collapse" id="comments-${post.id}">
                                <div class="bg-black rounded p-3 border border-secondary">
                                    <div class="comments-list mb-3" id="comment-list-${post.id}">
                                        ${commentsHtml.length > 0 ? commentsHtml : '<span class="text-muted small">Noch keine Kommentare.</span>'}
                                    </div>
                                    <div class="input-group input-group-sm">
                                        <input type="text" class="form-control bg-dark text-white border-secondary" placeholder="Kommentar..." id="input-${post.id}">
                                        <button class="btn btn-primary" onclick="addComment(${post.id})">Post</button>
                                    </div>
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

// --- 4. Funktionen ---
window.likePost = function(id) {
    const post = posts.find(p => p.id === id);
    if(post) {
        post.likes++;
        saveAndRender();
        // Animation finden und auslösen
        setTimeout(() => {
            const btn = document.querySelector(`button[onclick="likePost(${id})"]`);
            if(btn) btn.classList.add('pulse-anim');
        }, 50);
    }
};

window.addComment = function(id) {
    const inputField = document.getElementById(`input-${id}`);
    const text = inputField.value;
    if (text.trim() === "") return;

    const post = posts.find(p => p.id === id);
    if(post) {
        post.comments.push({ user: "Guest_User", text: text });
        saveAndRender();
        // Kommentarfeld wieder öffnen nach Re-Render
        setTimeout(() => {
            const el = document.getElementById(`comments-${id}`);
            if(el) el.classList.add('show');
        }, 100);
    }
};

function saveAndRender() {
    localStorage.setItem('myPortfolioPosts', JSON.stringify(posts));
    renderPosts();
}

// Init
renderPosts();