import { editarCliente,actualizarCliente } from "./API.js";
import { mostrarMensaje, validarCliente } from "./funciones.js";
(function(){

    const nombreInput = document.querySelector('#nombre')
    const emailInput = document.querySelector('#email')
    const empresaInput = document.querySelector('#empresa')
    const telefonoInput = document.querySelector('#telefono')
    const idInput = document.querySelector('#id')
    const formulario =document.querySelector('#formulario')
    formulario.addEventListener('submit',modificarCliente)

    document.addEventListener('DOMContentLoaded',async ()=>{
        const parametrosURL = new URLSearchParams(window.location.search)//va a 

        const idCliente = parametrosURL.get("id")
        
        const cliente = await editarCliente(idCliente)
        mostrarClientes(cliente)
        
    })


    function mostrarClientes(cliente){
        const {email,empresa,nombre,id,telefono} = cliente

        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
        idInput.value = id;
    }

    async function modificarCliente(e){
        e.preventDefault();
        const cliente = {
            nombre : nombreInput.value,
            email : emailInput.value,
            telefono: telefonoInput.value,
            empresa : empresaInput.value,
            id: (idInput.value)
        }
        console.log(cliente);
        if(validarCliente(cliente)){
            mostrarMensaje("todos los campos son obligatorios")
            return;
        }
        await actualizarCliente(cliente);
        
    }


})();