// Scroll to top
document.getElementById('scrollTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Simple menu button (optional)
document.getElementById('menuBtn').addEventListener('click', () => {
    alert('Menu clicked!');
});
