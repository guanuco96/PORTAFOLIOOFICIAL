const cuadros = document.querySelectorAll('.cuadro');

cuadros.forEach(cuadro => {

  const left = Math.random() * 100;
  cuadro.style.left = `${left}%`;


  cuadro.style.top = '100vh';

  const delay = Math.random() * 10;
  cuadro.style.animationDelay = `-${delay}s`;
});