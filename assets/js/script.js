
function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    document.body.appendChild(particle);

    const size = Math.random() * 10 + 5;
    const duration = Math.random() * 1 + 0.5;
    const distance = Math.random() * 100 + 50;
    const angle = Math.random() * Math.PI * 2;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    particle.animate([
        { transform: 'translate(0, 0)', opacity: 1 },
        { transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`, opacity: 0 }
    ], {
        duration: duration * 1000,
        easing: 'cubic-bezier(0, .9, .57, 1)',
        fill: 'forwards'
    }).onfinish = () => particle.remove();
}

document.body.addEventListener('mousemove', (e) => {
    if (Math.random() < 0.1) {
        createParticle(e.clientX, e.clientY);
    }
});

// Create initial particles
for (let i = 0; i < 20; i++) {
    setTimeout(() => {
        createParticle(
            Math.random() * window.innerWidth,
            Math.random() * window.innerHeight
        );
    }, i * 200);
}

// Attempt to autoplay video with sound
const player = document.getElementById('ytplayer');
        
function attemptPlay() {
    player.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
}

// Try to play immediately
attemptPlay();

// Also try to play on the first user interaction
document.body.addEventListener('click', function() {
    attemptPlay();
}, { once: true });