// Golden Shine - JavaScript

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Close menu when clicking a link
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

  // Contact form
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      alert(`¡Gracias ${name}! Hemos recibido tu mensaje. Pronto nos pondremos en contacto contigo.`);
      form.reset();
    });
  }
});
