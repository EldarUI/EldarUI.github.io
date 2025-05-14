// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Initialize animations
    AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out-quad'
    });

    // Parallax effect
    document.addEventListener('mousemove', (e) => {
        const cards = document.querySelectorAll('.card');
        const x = (window.innerWidth - e.pageX * 2) / 50;
        const y = (window.innerHeight - e.pageY * 2) / 50;
        
        cards.forEach(card => {
            card.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
        });
    });

    // Dynamic gradient adjustment
    document.querySelectorAll('.text-gradient').forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            element.style.setProperty('--gradient-pos', `${x}px ${y}px`);
        });
    });

    // Typing animation
    new TypeIt('.typing-animation', {
        strings: ['Products', 'Platforms', 'Dreams'],
        speed: 100,
        breakLines: false,
        loop: true
    }).go();
});
