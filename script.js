// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    // Close modal when clicking outside
    const modals = document.querySelectorAll('.modal');
    
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                window.location.hash = '';
            }
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Don't prevent default for modal links
            if (href.includes('-modal')) {
                return;
            }
            
            // Don't prevent default for closing modals
            if (href === '#') {
                return;
            }
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            window.location.hash = '';
        }
    });

    // Hero image 3D tilt effect
    const heroImage = document.querySelector('.hero-image img');
    const heroImageContainer = document.querySelector('.hero-image');
    
    if (heroImage && heroImageContainer) {
        heroImageContainer.addEventListener('mousemove', function(e) {
            const rect = heroImageContainer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / centerY * 15; // Max 15 degrees
            const rotateY = (centerX - x) / centerX * 15; // Max 15 degrees
            
            heroImage.style.transform = `perspective(1500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        heroImageContainer.addEventListener('mouseleave', function() {
            heroImage.style.transform = 'perspective(1500px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    }
});
