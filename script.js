// JavaScript for Sözen Soğutma Website

// Smooth scroll behavior (already handled by CSS, but adding for compatibility)
document.addEventListener('DOMContentLoaded', function() {
    
    // Lazy loading for images
    const images = document.querySelectorAll('img');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.src; // Trigger load if needed
                    img.style.opacity = '1';
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.style.opacity = '1';
        });
    }
    
    // Add click handlers for gallery items (optional - can be expanded)
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Can add lightbox functionality here if needed
            console.log('Gallery item clicked');
        });
    });
    
    // Add smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
});

// Performance optimization: Debounce scroll events
let ticking = false;
window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            // Add any scroll-based animations here if needed
            ticking = false;
        });
        ticking = true;
    }
});

