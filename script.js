document.addEventListener('DOMContentLoaded', () => {
  const boton = document.querySelector('.boton-inicio');
  const pantalla = document.getElementById('pantalla-inicial');
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');

  boton.addEventListener('click', () => {
    pantalla.style.display = 'none';   // oculta video y pantalla inicial
    header.style.display = 'flex';     // muestra header
    main.style.display = 'block';      // muestra main
    footer.style.display = 'block';    // muestra footer
  });
});