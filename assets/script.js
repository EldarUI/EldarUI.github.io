document.addEventListener('DOMContentLoaded', function() {
    // Custom cursor effect
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });
    
    // Cursor hover effects
    const hoverElements = document.querySelectorAll('a, button, .feature-card, .nav-link');
    
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursor.style.opacity = '0.5';
            cursorFollower.style.width = '30px';
            cursorFollower.style.height = '30px';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.opacity = '1';
            cursorFollower.style.width = '40px';
            cursorFollower.style.height = '40px';
        });
    });
    
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
    
    // Gradient animation for hero section
    const heroGradient = document.querySelector('.hero-gradient');
    let angle = 0;
    
    const animateGradient = () => {
        angle = (angle + 0.2) % 360;
        heroGradient.style.background = `rad-gradient(circle at center, rgba(121, 40, 202, 0.1) 0%, rgba(255, 0, 128, 0.05) 50%, transparent 70%)`;
        requestAnimationFrame(animateGradient);
    };
    
    animateGradient();
    
    // Floating animation for app window
    const appWindow = document.querySelector('.app-window');
    
    const floatAnimation = () => {
        appWindow.style.transform = `perspective(1000px) rotateY(-10deg) rotateX(5deg) translateY(${Math.sin(Date.now() / 1000) * 10}px)`;
        requestAnimationFrame(floatAnimation);
    };
    
    floatAnimation();
    
    // Typewriter effect for hero title (optional)
    const heroTitle = document.querySelector('.hero-title');
    const titleText = "The issue tracking tool you'll enjoy using";
    let charIndex = 0;
    
    const typeWriter = () => {
        if (charIndex < titleText.length) {
            heroTitle.textContent += titleText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 50);
        }
    };
    
    // Uncomment to enable typewriter effect
    // heroTitle.textContent = '';
    // setTimeout(typeWriter, 1000);
});
