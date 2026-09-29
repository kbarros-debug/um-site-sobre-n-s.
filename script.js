// Aplica a rotação definida em data-rotate em cada moldura
document.querySelectorAll('.photo-block[data-rotate]').forEach(function(block) {
  var deg = block.getAttribute('data-rotate');
  var frame = block.querySelector('.frame');
  if (frame) frame.style.transform = 'rotate(' + deg + 'deg)';
});

// Animação de entrada ao fazer scroll
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(function(el) {
  observer.observe(el);
});
