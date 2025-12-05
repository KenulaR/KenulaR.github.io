// Automatically update the year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Simple scroll reveal animation
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add simple fade-in CSS class injection
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 1s ease-in-out";
    
    // Slight delay to ensure load
    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);
});