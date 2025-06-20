document.addEventListener('DOMContentLoaded', () => {
  const boton = document.querySelector('.boton-inicio');
  const pantalla = document.getElementById('pantalla-inicial');
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');

  boton.addEventListener('click', () => {
    pantalla.style.display = 'none'; // Oculta el video
    header.classList.remove('oculto'); // Muestra el header
    main.classList.remove('oculto');   // Muestra el main
    footer.classList.remove('oculto'); // Muestra el footer
  });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const loaderContainer = document.getElementById('loader'); // Obtiene el contenedor de "Enviando"
    const successContainer = document.getElementById('listo');  // Obtiene el contenedor de "Listo"

    // Esta función se ejecuta después del tiempo especificado (4 segundos)
    setTimeout(() => {
        // Asegúrate de que los elementos existen antes de manipularlos
        if (loaderContainer) {
            loaderContainer.style.display = 'none'; // Oculta la pantalla de carga
        }
        if (successContainer) {
            successContainer.style.display = 'flex'; // Muestra la pantalla de "Listo"
            successContainer.classList.add('visible'); // Aplica la animación de entrada suave
        }
    }, 4000); // 4000 milisegundos = 4 segundos. ¡Aquí se define el tiempo!
 if (boton) {
        boton.addEventListener('click', () => {
            if (pantalla) pantalla.style.display = 'none';
            if (header) header.style.display = 'flex';
            if (main) main.style.display = 'block';
            if (footer) footer.style.display = 'block';
        });
    }
});