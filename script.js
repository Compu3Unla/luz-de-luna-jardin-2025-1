document.addEventListener('DOMContentLoaded', () => {
  const boton = document.querySelector('.boton-inicio');
  const pantalla = document.getElementById('pantalla-inicial');
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');
  const loaderContainer = document.getElementById('loader');
  const successContainer = document.getElementById('listo');

  // Animación de carga
  setTimeout(() => {
    if (loaderContainer) {
      loaderContainer.style.display = 'none';
    }
    if (successContainer) {
      successContainer.style.display = 'flex';
      successContainer.classList.add('visible');
    }
  }, 4000);

  // Verificación de sessionStorage
  const videoVisto = sessionStorage.getItem('videoVisto');

  if (videoVisto === 'true') {
    if (pantalla) pantalla.style.display = 'none';
    if (header) header.classList.remove('oculto');
    if (main) main.classList.remove('oculto');
    if (footer) footer.classList.remove('oculto');
  } else {
    if (boton) {
      boton.addEventListener('click', () => {
        if (pantalla) pantalla.style.display = 'none';
        if (header) header.classList.remove('oculto');
        if (main) main.classList.remove('oculto');
        if (footer) footer.classList.remove('oculto');

        sessionStorage.setItem('videoVisto', 'true');
      });
    }
  }
});
