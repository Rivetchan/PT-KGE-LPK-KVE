function openWhyModal() {
    document.getElementById('whyModal').style.display = 'block';
}

function closeWhyModal() {
    document.getElementById('whyModal').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.hash === '#why' || new URLSearchParams(window.location.search).get('modal') === 'why') {
        openWhyModal();
    }

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