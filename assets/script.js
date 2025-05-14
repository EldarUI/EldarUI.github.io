document.addEventListener('DOMContentLoaded', function() {
    // Scroll animations
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.feature-card, .section-header, .testimonial-card');
        
        elements.forEach(el => {
            const elementPosition = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    document.querySelectorAll('.feature-card, .section-header, .testimonial-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Run once on load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navActions = document.querySelector('.nav-actions');
    
    mobileMenuBtn.addEventListener('click', () => {
        const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
        
        if (isExpanded) {
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            navLinks.style.display = 'none';
            navActions.style.display = 'none';
        } else {
            mobileMenuBtn.setAttribute('aria-expanded', 'true');
            mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
            navLinks.style.display = 'flex';
            navActions.style.display = 'flex';
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (mobileMenuBtn.getAttribute('aria-expanded') === 'true') {
                    mobileMenuBtn.click();
                }
            }
        });
    });
    
    // Floating animation for app window
    const appWindow = document.querySelector('.app-window');
    
    const floatAnimation = () => {
        appWindow.style.transform = `perspective(1000px) rotateY(-10deg) rotateX(5deg) translateY(${Math.sin(Date.now() / 1000) * 10}px)`;
        requestAnimationFrame(floatAnimation);
    };
    
    floatAnimation();
});
