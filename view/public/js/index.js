import {queryUser} from "../../../controller/controllerUser.js";

document.querySelector('.btnLogin').addEventListener('click', login)
let contador = 0
function login () {
    if (queryUser()){
        window.location.href = '/view/pages/home.html'   
    }
    else{
        contador ++
        if(contador < 3){
            let numeroIntentos = 3
            numeroIntentos -= contador
            alert('error de credenciales'+'\n numero de intentos ' + numeroIntentos)
        }
        else{
            alert('numero de intentos alcansado \nporfavor actualice la pagina para volver a intentar')
            document.querySelector('.btnLogin').disabled = true
        }
    }
}