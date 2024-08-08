document.addEventListener("DOMContentLoaded", function() {
    // Configuración del carrusel automático
    const intervalo = 3000; // Intervalo en milisegundos (3 segundos)
  
    const carousel = document.querySelector('.carousel');
    const carouselInner = carousel.querySelector('.carousel-inner');
    const items = carousel.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    let currentIndex = 0;
  
    // Función para pasar al siguiente ítem del carrusel
    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalItems;
      updateCarousel();
    }
  
    // Función para actualizar la posición del carrusel
    function updateCarousel() {
      const offset = -currentIndex * items[0].offsetWidth;
      carouselInner.style.transform = `translateX(${offset}px)`;
    }
  
    // Iniciar carrusel automático
    setInterval(nextSlide, intervalo);
  });
  
  
