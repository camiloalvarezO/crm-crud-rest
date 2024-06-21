import {mostrarAlerta,validarCampos} from './funciones.js';
import { nuevoCliente } from './API.js';

(function () {
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit',validarCliente)

    function validarCliente(e){
        e.preventDefault();

        //validar el formulario
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        const cliente = {
            nombre,
            email,
            telefono,
            empresa 
        }
        
        if(validarCampos(cliente)){
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }else if (isNaN(telefono) || telefono < 0 ){
            mostrarAlerta('telefono no valido');
            return;
        }
        nuevoCliente(cliente);
    }

    
})()