// function saludar(nombre) {
//     alert("Hola " + nombre);
//   }
  
//   function procesarEntradaUsuario(callback) {
//     var nombre = prompt("Por favor ingresa tu nombre.");
//     callback(nombre);
//   }
  
//   procesarEntradaUsuario(saludar);
  

  /*
  Implementar un código donde emplee callback.
  
  Recibir un número y si el número es mayor a 10
  calcular e imprimir en otra función la suma de los números del 1 al 100.
  */

  function mayorQue10(numero) {
    if (numero > 10) {
      var suma = 0;
      for (var i = 1; i <= 100; i++) {
        suma += i;
      }
      alert("La suma de los números del 1 al 100 es: " + suma);
    }
  }

  function number(callback){
    var numero = prompt("Por favor ingrese un número");
    callback(numero);
    }

  number(mayorQue10);