// --- APP PROJEKT DATENBANK ---
const apps = [
    {
        title: "Network Scanner Tool",
        desc: "Eine native Android App für Systemadministratoren. Sie scannt das lokale WLAN nach verbundenen Geräten, zeigt IP- und MAC-Adressen an und prüft offene Ports. Unverzichtbar für schnelles Debugging im Serverraum.",
        image: "network-app.png", // Hier Screenshot URL
        tech: ["Java", "Android SDK", "Networking", "XML"],
        filename: "NetworkScanner.java",
        github: "https://github.com/deinuser/netscan",
        snippet: `public void scanNetwork() {
    ExecutorService executor = Executors.newFixedThreadPool(10);
    for (int i = 1; i < 255; i++) {
        String host = subnet + "." + i;
        executor.execute(() -> {
            if (InetAddress.getByName(host).isReachable(100)) {
                deviceList.add(new Device(host, "Online"));
                updateUI();
            }
        });
    }
}`
    },
    {
        title: "Local Sense",
        desc: "Local Sense ist eine von mir entwickelte App, die ein Begleiter im Alltag sein soll. Sie hat ein intigriertes KI Machine Learning Modell, welche komplett on device läuft und mit dem Benutzer lernt.",
        image: "local-sense.png",
        tech: ["Kotlin", "ZXing Barcode", "SQL", "Room DB"],
        filename: "app-debug.kt",
        github: "https://github.com/deinuser/inventory",
        snippet: `fun startCamera() {
    val cameraProviderFuture = ProcessCameraProvider.getInstance(context)
    cameraProviderFuture.addListener({
        val cameraProvider = cameraProviderFuture.get()
        val preview = Preview.Builder().build()
            .also { it.setSurfaceProvider(viewFinder.surfaceProvider) }
        
        // Scan Logic
        cameraProvider.bindToLifecycle(this, cameraSelector, preview, imageAnalyzer)
    }, ContextCompat.getMainExecutor(context))
}`
    },
    {
        title: "Mein Love-Tagebuch",
        desc: "Eine App, welche sowohl für frische Singles, als auch für verliebte Pärchen gedacht ist. Du kannst Bilder, gedanken und vieles mehr in einer gekapselten App festhalten. ",
        image: "mein-love-tagebuch.png",
        tech: ["Flutter", "MQTT", "Dart", "IoT"],
        filename: "MqttService.dart",
        github: "https://github.com/deinuser/smarthome",
        snippet: `void connect() async {
  client.logging(on: true);
  final connMess = MqttConnectMessage()
      .withClientIdentifier('dashboard_tablet')
      .startClean();
  
  try {
    await client.connect();
    client.subscribe("home/livingroom/temp", MqttQos.atLeastOnce);
  } catch (e) {
    print('Connection failed: $e');
  }
}`
    }
];

// --- LOGIK ---
let currentIdx = 0;

// Elemente holen
const titleEl = document.getElementById('appTitle');
const descEl = document.getElementById('appDesc');
const imgEl = document.getElementById('appImage');
const badgeEl = document.getElementById('techBadges');
const fileEl = document.getElementById('filename');
const codeEl = document.getElementById('codeSnippet');
const linkEl = document.getElementById('githubLink');
const idxEl = document.getElementById('currentIndex');
const totalEl = document.getElementById('totalIndex');

// Initialisierung
totalEl.innerText = apps.length;
renderApp(currentIdx);

function renderApp(index) {
    const app = apps[index];
    
    // Inhalte setzen (mit Fade Effekt)
    titleEl.innerText = app.title;
    descEl.innerText = app.desc;
    imgEl.src = app.image;
    fileEl.innerText = app.filename;
    linkEl.href = app.github;
    idxEl.innerText = index + 1;

    // Badges generieren
    badgeEl.innerHTML = '';
    app.tech.forEach(t => {
        badgeEl.innerHTML += `<span class="badge bg-dark border border-secondary me-2 mb-2">${t}</span>`;
    });

    // Code Snippet animieren (Typewriter Effekt simulieren)
    codeEl.innerText = "";
    let i = 0;
    const speed = 5; // Schreibgeschwindigkeit
    
    function typeWriter() {
        if (i < app.snippet.length) {
            codeEl.innerText += app.snippet.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
}

// Navigation Functions
window.nextApp = function() {
    currentIdx++;
    if(currentIdx >= apps.length) currentIdx = 0;
    renderApp(currentIdx);
}

window.prevApp = function() {
    currentIdx--;
    if(currentIdx < 0) currentIdx = apps.length - 1;
    renderApp(currentIdx);
}