function proceso1() {
    let suma1 = 0;
    for (let i = 0; i <= 5000; i++) {

        suma1 += i;

    }  
    
    return(`La suma es ${suma1}`)

}

function proceso2() {
    let suma2 = 0;
    for (let i = 0; i <= 20000; i++) {

        suma2 += i;

    } 
    
    return(`La suma es ${suma2}`)

}

function proceso3() {
    let suma3 = 0;
    for (let i = 0; i <= 1000; i++) {

        suma3 += i;

    } 
    
    return(`La suma es ${suma3}`)

}

document.querySelector('#btnBuscar').addEventListener('click', () => {

    console.log(proceso1());
    console.log(proceso2());
    console.log(proceso3());

});