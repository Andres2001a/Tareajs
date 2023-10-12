const calcularSubtotal = () => {
    let precio = document.getElementById('precio').value;
    let cantidad = document.getElementById('cantidad').value;

    if (precio.length != 0 || cantidad.length != 0) {
        document.getElementById('subtotal').value = precio * cantidad;
    }

}