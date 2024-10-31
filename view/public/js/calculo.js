//Cierre de sesión
document.querySelector('.item-2').addEventListener('click', () => {
    alert('Closing session')
    window.location.href = '/index.html'
})

let nuevoRegistro = document.querySelector('.new').addEventListener('click', () => {
    document.getElementById('salary').value = null
    document.querySelector('#total').value = null
    document.getElementById('salary').focus()
})

document.querySelector('.btn').addEventListener('click', () => {
    let sueldoEmpleado = parseFloat(document.getElementById('salary').value)
    let total 
    total = totalSueldo(sueldoEmpleado,totalDescuento(sueldoEmpleado))
    document.querySelector('#total').value = total.toFixed(2)
})

//funciones
function totalDescuento(sueldoEmpleado) {
    let descuento
    if (sueldoEmpleado <= 2000000) {
        return sueldoEmpleado * 10 / 100
    } else if (sueldoEmpleado <= 5000000 && sueldoEmpleado > 2000000) {
        return sueldoEmpleado * 15 / 100
    } else {
        return sueldoEmpleado * 20 / 100
    }
}
function totalSueldo(sueldoEmpleado, descuento) {
    return sueldoEmpleado - descuento
}


