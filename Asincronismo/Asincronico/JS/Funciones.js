preceso1 = async () => {
    let suma1 = 0
    return new Promise((resolve, reject) => setTimeout(() => {
        for (let i = 0; i <= 5000; i++) {

            suma1 += i

        }
        resolve(`La suma es ${suma1}`)
    }, 5000) // Retraso de 5 segundos
    )
}

preceso2 = async () => {
    let suma2 = 0
    return new Promise((resolve, reject) => setTimeout(() => {
        for (let i = 0; i <= 20000; i++) {

            suma2 += i

        }
        resolve(`La suma es ${suma2}`)
    }, 8000) // Retraso de 8 segundos
    )
}

preceso3 = async () => {
    let suma3 = 0
    return new Promise((resolve, reject) => setTimeout(() => {
        for (let i = 0; i <= 1000; i++) {

            suma3 += i

        }
        resolve(`La suma es ${suma3}`)
    }, 3000) // Retraso de 3 segundos
    )
}

document.querySelector('#btnBuscar').addEventListener('click', () => {
    preceso1().then(mensaje => console.log(mensaje))
    preceso2().then(mensaje => console.log(mensaje))
    preceso3().then(mensaje => console.log(mensaje))
})
