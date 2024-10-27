import {queryUser} from "../../../controller/controllerUser.js";

document.querySelector('.btnLogin').addEventListener('click', login)

function login () {
    if (queryUser()){
        window.location.href = '/view/pages/home.html'   
    }
    else{
        alert('Error de credenciales')
    }
}