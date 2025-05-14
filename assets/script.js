document.addEventListener('DOMContentLoaded', () => {
    // Animated title lines
    document.querySelectorAll('.title-line span').forEach((line, index) => {
        line.style.animationDelay = `${index * 0.1}s`;
    });

    // Floating cards animation
    const floatCards = document.querySelectorAll('.float-card');
    floatCards.forEach(card => {
        let x = 0, y = 0;
        
        document.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            x = (e.clientX - centerX) * 0.02;
            y = (e.clientY - centerY) * 0.02;
            
            card.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg) scale(1.02)`;
        });

        card.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.3s ease-out';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });

    // Smooth scroll for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Parallax effect for gradient overlay
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        document.querySelector('.gradient-overlay').style.transform = `translateY(${scrolled * 0.5}px)`;
    });

    // Dynamic blur on scroll
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        const navbar = document.querySelector('.navbar');
        
        if (currentScroll > lastScroll) {
            navbar.style.backdropFilter = 'blur(24px)';
        } else {
            navbar.style.backdropFilter = 'blur(16px)';
        }
        
        lastScroll = currentScroll;
    });
});
