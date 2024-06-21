import {editarCliente, obtenerCliente} from './API.js';
import { validarCampos,mostrarAlerta } from './funciones.js';

(function(){

    // campos del formulario 
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email')
    const empresaInput = document.querySelector('#empresa')
    const telefonoInput = document.querySelector('#telefono')
    const idInput = document.querySelector('#id')

    document.addEventListener('DOMContentLoaded',async () =>{
        const parametrosURL = new URLSearchParams(window.location.search);
        const idCliente = parametrosURL.get('id');
        const cliente = await obtenerCliente(idCliente);
        mostrarCliente(cliente);

        //submit al formulario

        const formulario = document.querySelector('#formulario')
        formulario.addEventListener('submit',validarCliente)
    })

    function mostrarCliente(cliente) {
        const {nombre, empresa, email,telefono,id} = cliente;

        nombreInput.value = nombre;
        empresaInput.value = empresa;
        emailInput.value = email;
        telefonoInput.value = telefono;
        idInput.value = id;
        

    }

    async function validarCliente(e){
        e.preventDefault()

        const cliente = { // no puedo usar object litera porque están los input como valores
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa : empresaInput.value,
            id : idInput.value,
        }

        if(validarCampos(cliente)){
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }else if ( telefono < 0 ){
            mostrarAlerta('telefono no valido');
            return;
        }
        // reescribimos el objeto del cliente
        await editarCliente(cliente)
    }

})()