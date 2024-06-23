
import { mostrarMensaje,validarCliente } from "./funciones.js";
import { nuevoCliente } from "./API.js";
(function(){
    const formulario = document.querySelector('#formulario')
    
    formulario.addEventListener('submit', validarFormulario)

    function validarFormulario(e){
        e.preventDefault();

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
        if (validarCliente(cliente)) {// si almenos uno es diferente de "" tira falso
            mostrarMensaje("no se pasó la validación");
            return;
        }
        // console.log(Object.values(cliente).every(input => input !== "")); // si almenos uno es !"" tira falso
        nuevoCliente(cliente)
        
    }
})();

