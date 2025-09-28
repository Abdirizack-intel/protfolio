// Reveal sections on scroll for UX animation
window.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.section');
  const reveal = () => {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        section.classList.add('visible');
      }
    });
  };
  window.addEventListener('scroll', reveal);
  reveal();
});
