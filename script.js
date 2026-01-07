// Smooth scroll for internal links
const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
}

// Contact form submit animation
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thanks for your message! I will get back to you soon.');
    form.reset();
});
