  const formulario = document.getElementById('miFormulario');
    const resultado = document.getElementById('resultado');

    formulario.addEventListener('submit', function (event) {
      event.preventDefault();

      const nombre = document.getElementById('nombre').value;
      const correo = document.getElementById('correo').value;

      const promesa = new Promise((resolve, reject) => {
        if (nombre && correo) {
          resolve(`Nombre: ${nombre}, Correo: ${correo}`);
        } else {
          reject('Por favor, complete todos los campos.');
        }
      });

      promesa
        .then(data => {
          resultado.innerHTML = `Formulario enviado. ${data}`;
        })
        .catch(error => {
          resultado.innerHTML = `Error: ${error}`;
        });
    });

   // validar la contraseña
function validarContraseña(contraseña) {
    return new Promise((resolve, reject) => {
      
      // verificamos requisitos
      if (contraseña.length >= 8 && /[a-zA-Z]/.test(contraseña) && /\d/.test(contraseña)) {
        resolve('Contraseña válida');
      } else {
        reject('La contraseña no cumple con los requisitos.');
      }
    });
  }
  
  // Se ingresa contaseña
  const usuario = prompt('Ingresa tu contraseña:');
  
  // Validar la contraseña ingresada
  validarContraseña(usuario)
    .then((mensaje) => {
      console.log(mensaje);
    })
    .catch((error) => {
      console.error(error);
    });