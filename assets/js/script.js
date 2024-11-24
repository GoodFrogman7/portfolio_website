// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Scroll-triggered animations for fade-in effects
const fadeInElements = document.querySelectorAll('.fade-in');

const triggerAnimations = () => {
    fadeInElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Trigger animations on page load and scroll
window.addEventListener('scroll', triggerAnimations);
window.addEventListener('load', triggerAnimations);
