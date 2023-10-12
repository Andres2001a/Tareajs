validarContacto = () => {
    //Validar campos vacios
    let documento = document.querySelector('#documento');
    console.log(documento.value);
    let nombres = document.querySelector('#nombres');
    console.log(nombres.value);
    if (documento.value.length == 0) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'El documento está vacio',
            showConfirmButton: false,
            timer: 1500
        })
    } else if (nombres.value.length == 0) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'El nombre está vacio',
            showConfirmButton: false,
            timer: 1500
        })
    } else if (nombres.value.length) {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Registrado',
            showConfirmButton: false,
            timer: 1500
        });
    }
}

//Capturar el objeto al cual se le dará click
const boton = document.querySelector('#btnEnviar');

//Escuchar eventos del botón
boton.addEventListener('click', validarContacto)