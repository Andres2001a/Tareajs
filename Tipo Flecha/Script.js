// implementar un código donde emplee callback.
// Recibir un número y si el número es mayor a 10, calcular e imprimir en otra función la suma de los números del 1 al 100.


//------------------------FUNCIONES NORMALES-----------------------

// function recibir (parametro) {
//     const numero = parseInt(prompt("Ingrese un número"))
//     if (numero > 10) {
//         parametro();
//     }
// }
// function calculareimprimir () {
//     let resultado = 0
//     for ( i = 1; i <= 100; i++) {
//         resultado += i
//     }
//     alert(resultado);
// }
// recibir(calculareimprimir);


//------------------------FUNCIONES FLECHA---------------------------

const recibir = (persecusión) => {
    const numero = parseInt(prompt("Ingrese un número"))
    if (numero > 10) {
        persecusión();
    }
}

const calculareimprimir = () => {
    let resultado = 0;
    for (i = 1; i <= 100; i++) {
        resultado += i;
    }
    alert(resultado);
}
recibir(calculareimprimir);w