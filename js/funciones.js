export function mostrarAlerta(mensaje){
    const alertas = document.querySelector('.alerta')
    if(!alertas){
        const alerta = document.createElement('div');
        alerta.classList.add('alerta','bg-red-500','text-white','text-center','border-red-100','rounded','m-2','p-1','max-w-lg');
        
        alerta.innerHTML = `
            <strong class="font-bold"> Error! </strong>
            <span class="block sm:inline">${mensaje}</span>
        `;
        const formulario = document.querySelector('#formulario');
        formulario.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3000);

    }
    
}

export function validarCampos(obj){
        
    // return !Object.values(obj).every(input => input == '');


    //Este cambio utiliza some en lugar de every y verifica si ALGUNO de los campos está vacío
    //  después de recortar los espacios en blanco con trim(). Si al menos uno de los campos está vacío, 
    //  la condición se evaluará como true y mostrará el mensaje de "Todos los campos son obligatorios".
    return Object.values(obj).some(input => input.trim() === '');

    // return Object.values(obj).every(input => input.trim() !== '');
    // Esta modificación asegura que cada campo, después de recortar los espacios en blanco, 
    // no sea una cadena vacía. Si al menos un campo está vacío, la validación fallará y mostrará
    //  el mensaje de "Todos los campos son obligatorios".

}
// function mostrarAlerta(msg){
//     const alertas = document.querySelector('.alerta')
//     if(!alertas){
//         const alerta = document.createElement('div');
//         alerta.classList.add('alerta','bg-red-500','text-white','text-center','rounded','m-2','p-1');
//         alerta.textContent = msg;
//         formulario.appendChild(alerta);

//         setTimeout(() => {
//             alerta.remove();
//         }, 3000);
//     }
// }