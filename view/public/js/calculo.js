let sueldoEmpleado
let nuevoRegistro

do {
    sueldoEmpleado = Number(prompt('Ingrese el valor del sueldo del empleado; '))

    console.log (totalSueldo(totalDescuento(sueldoEmpleado)))

    nuevoRegistro = prompt('nuevo registro')


    
} while (nuevoRegistro == 'S');

function totalDescuento (sueldoEmpleado){
    let descuento
    if (sueldoEmpleado <= 2000000) {        
        return sueldoEmpleado * 10 / 100
    } else if (sueldoEmpleado <= 5000000 && sueldoEmpleado > 2000000){
        return sueldoEmpleado * 15 / 100
    }else {
        return sueldoEmpleado * 20 / 100
    }
}
function totalSueldo(descuento){
    return sueldoEmpleado - descuento
    
}
