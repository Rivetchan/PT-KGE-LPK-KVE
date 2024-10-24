document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    const options = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1 
    };

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, options);

    fadeElements.forEach(element => {
        fadeInObserver.observe(element);
    });
});
