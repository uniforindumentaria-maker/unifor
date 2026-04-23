// Manejo simple para el desplazamiento suave (smooth scroll)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Puedes agregar efectos de scroll aquí para que las imágenes aparezcan con fade
window.addEventListener('scroll', () => {
    // Lógica para animaciones si fuera necesario
});
// Lógica para el menú hamburguesa
const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Cerrar el menú si se hace click en un link (opcional pero recomendado)
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});