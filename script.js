document.addEventListener('DOMContentLoaded', () => {
  const boton = document.querySelector('.boton-inicio');
  const pantalla = document.getElementById('pantalla-inicial');
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');


  const yaVioVideo = localStorage.getItem('videoVisto');

  if (yaVioVideo === 'true') {

    pantalla.style.display = 'none';
    header.classList.remove('oculto');
    main.classList.remove('oculto');
    footer.classList.remove('oculto');
  } else {

    boton.addEventListener('click', () => {
      pantalla.style.display = 'none';
      header.classList.remove('oculto');
      main.classList.remove('oculto');
      footer.classList.remove('oculto');

      localStorage.setItem('videoVisto', 'true');
    });
  }
});
document.addEventListener('DOMContentLoaded', (event) => {
    const loaderContainer = document.getElementById('loader'); 
    const successContainer = document.getElementById('listo'); 


    setTimeout(() => {
 
        if (loaderContainer) {
            loaderContainer.style.display = 'none'; 
        }
        if (successContainer) {
            successContainer.style.display = 'flex'; 
            successContainer.classList.add('visible'); 
        }
    }, 4000); 
 if (boton) {
        boton.addEventListener('click', () => {
            if (pantalla) pantalla.style.display = 'none';
            if (header) header.style.display = 'flex';
            if (main) main.style.display = 'block';
            if (footer) footer.style.display = 'block';
        });
    }
});