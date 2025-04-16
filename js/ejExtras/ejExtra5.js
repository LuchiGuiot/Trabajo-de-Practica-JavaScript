let producto = parseInt(prompt('Ingresa el precio del producto a comprar'))

if (producto > 1000){
    let descuento_producto = producto - (producto * 0.15)
    alert('El precio es= '+ descuento_producto)
}