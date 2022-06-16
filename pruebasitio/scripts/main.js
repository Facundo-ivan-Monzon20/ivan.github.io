document.querySelector('button').onclick = function () {
    const h2 = document.querySelector('h2');
    let mensaje = '¡seguí así, vas muy bien!';
    if (h2.textContent === mensaje) {
        h2.textContent = '';
    } else {
        h2.textContent = mensaje;
    }
}

let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/bb.png') {
      miImage.setAttribute('src','images/unnamed.png');
    } else {
      miImage.setAttribute('src', 'images/bb.png');
    }
}

let miBoton = document.querySelector('.userButton');
let miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    let miNombre = prompt('Introduzca su nombre.');
  if(!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.innerHTML = 'Bienvenido a FAQ RAP, ' + miNombre;
  }
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Bienvenido a FAQ RAP, ' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}