import {user} from '../model/BDuser.js'

export function queryUser () {
    let credenciales = user.some((i) => {
        let user = document.querySelector('#user').value 
        let password = document.querySelector('#password').value
    
        if(user == i.user && password == i.password ){
            return true
        }else {
            return false 
        }
    }) 
    return credenciales;
}
