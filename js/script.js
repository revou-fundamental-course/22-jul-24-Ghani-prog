// Banner auto-slide
const banner = document.querySelector('.banner');
const slides = banner.querySelectorAll('.banner-slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'flex' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Change slide every 5 seconds
setInterval(nextSlide, 4000);

// Show the first slide initially
showSlide(currentSlide);

// Form validation
const form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const destination = document.getElementById('destination').value;

    if (name === '') {
        alert('Please enter your name.');
        return;
    }

    if (email === '') {
        alert('Please enter your email address.');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (destination === '') {
        alert('Please select a destination.');
        return;
    }

    // If all validations pass, you can submit the form or process the data
    alert('Form submitted successfully!');
    form.reset();
});

function scrollToContactForm() {
    const contactForm = document.querySelector('.contact-form');
    contactForm.scrollIntoView({ behavior: 'smooth' });
}

function isValidEmail(email) {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}