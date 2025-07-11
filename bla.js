function verificar() {
  let ver = document.getElementById("nombre").value;
  let ver2 = document.getElementById("correo").value;

  if (ver.trim().length !== 0 && ver2.trim().length !== 0) {
    alert("Fue enviado correctamente: Nombre: " + ver + "Correo: " + ver2);
  } else {
    alert("Por favor, completa los campos.");
  }
}

function initCarousel() {
    const cards = document.querySelectorAll('.card');
    const list = document.getElementById('cards');
    let current = 2;

    const update = () => {
      cards.forEach((c, i) => {
        c.classList.toggle('active', i === current);
      });
      list.style.transform = `translateX(${(2 - current) * 140}px)`;
    };

    window.prev = () => {
      if (current > 0) current--;
      update();
    };

    window.next = () => {
      if (current < cards.length - 1) current++;
      update();
    };

    update();
  }

  initCarousel();