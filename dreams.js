// Observer für Scroll Animationen
// Das sorgt dafür, dass Elemente erst erscheinen, wenn sie im Bild sind
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // 10% des Elements müssen sichtbar sein
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Animation nur einmal abspielen
        }
    });
}, observerOptions);

document.addEventListener("DOMContentLoaded", () => {
    const scrollElements = document.querySelectorAll('.fade-in-scroll');
    scrollElements.forEach(el => observer.observe(el));
});
