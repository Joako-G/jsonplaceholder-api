console.log(document.getElementById('business'));

function onClick(event) {
  event.preventDefault();
  const mensaje = {
    business: document.getElementById('business').value,
    owner: document.getElementById('owner').value,
    phone: document.getElementById('phone').value,
  };

  console.log(mensaje);

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(mensaje),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      Swal.fire('Enviado', 'Gracias por participar', 'success');
      cleanForm();
    })
    .catch((err) => console.log(err));
}

function cleanForm() {
  let formulario = document.getElementById('form');
  formulario.reset();
}

let boton = document.getElementById('enviar');
boton.addEventListener('click', onClick);
