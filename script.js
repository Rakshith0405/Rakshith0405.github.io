document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetSection = document.querySelector(event.target.getAttribute('href'));
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Dark/Light Mode Toggle
    const toggleButton = document.createElement('button');
    toggleButton.textContent = '🌙';
    toggleButton.classList.add('theme-toggle');
    document.body.appendChild(toggleButton);
    
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        toggleButton.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });

    // Scroll Animation
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Typewriter Effect in Hero Section
    const typedText = document.querySelector('#hero h1');
    const words = ["Full Stack Developer", "AI Enthusiast", "Problem Solver"];
    let wordIndex = 0;
    let charIndex = 0;
    let currentWord = '';
    let isDeleting = false;

    function type() {
        if (wordIndex === words.length) {
            wordIndex = 0;
        }

        currentWord = words[wordIndex];
        if (isDeleting) {
            typedText.textContent = `Hi, I'm Rakshit, ${currentWord.slice(0, charIndex)}`;
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                wordIndex++;
            }
        } else {
            typedText.textContent = `Hi, I'm Rakshit, ${currentWord.slice(0, charIndex)}`;
            charIndex++;
            if (charIndex === currentWord.length) {
                isDeleting = true;
            }
        }
        setTimeout(type, isDeleting ? 150 : 250);
    }

    setTimeout(type, 500);

    // Form Validation
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        const nameInput = document.querySelector('#name');
        const emailInput = document.querySelector('#email');
        const messageInput = document.querySelector('#message');

        if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
            alert('Please fill in all the fields.');
            event.preventDefault();  // Prevent form submission
        } else {
            alert('Thank you for reaching out!');
        }
    });
});
