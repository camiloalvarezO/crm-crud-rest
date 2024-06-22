export function mostrarMensaje(mensaje){

    const alerta = document.querySelector('.bg-red-300');
    

    if(!alerta){
        const alerta = document.createElement('p');

        alerta.classList.add("bg-red-300","border-red-600","text-red-700","rounded",'px-4','py-3',
            'max-w-lg','mx-auto','mt-6','text-center');

        alerta.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class"block sm:inline">${mensaje}</span>
        `
        const formulario = document.querySelector('#formulario')
        
        formulario.appendChild(alerta);
        setTimeout(() => {
            alerta.remove()
        }, 3000);
    }
}