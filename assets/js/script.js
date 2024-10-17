function createBalloon() {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = `${Math.random() * 100}vw`;
    balloon.style.animationDuration = `${15 + Math.random() * 10}s`;
    balloon.style.animationDelay = `${Math.random() * 5}s`;
    balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 70%)`;
    document.body.appendChild(balloon);
}

for (let i = 0; i < 50; i++) {
    createBalloon();
}