/* get es para obtener registros
    post para enviar registros al servidor(nuevos registros o algo así)
    put o patch se utilizan para actualizar 
    delete XD*/

const url = `http://localhost:4000/clientes`;

export const nuevoCliente = async cliente => {
    
    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(cliente),// convertimos el cliente con todos los datos a string y lo mandamos a la url con el metodo
            //post
            headers: {
                'Content-Type' : 'application/json'
            }
        });

        // Espera a que la solicitud POST se complete antes de redirigir
        setTimeout(() => {
            window.location.replace('index.html');
        }, 100);

    } catch (error) {
        console.log(error);
    }
}

export const obtenerClientes = async () => {

    try {
        const respuesta = await fetch(url);
        const clientes = await respuesta.json();
        return clientes; 
    } catch (error) {
        console.log(error);
    }
}

//Eliminar cliente

export const eliminarCliente = async clienteId =>{
    try {
        fetch(`${url}/${clienteId}`,{
            method : 'DELETE'
        })
    } catch (error) {
        console.log(error);
    }
}


//obtiene un cliente por su id

export const obtenerCliente = async id =>{
    try {
        const respuesta = await fetch(`${url}/${id}`)
        const cliente = await respuesta.json();
        return cliente;
    } catch (error) {
        console.log(error);
    }
}

export const editarCliente = async cliente => {
    
    try {
    await fetch(`${url}/${cliente.id}`,{
        method : 'PUT',
        body : JSON.stringify(cliente),
        headers : {
            'Content-Type' : 'application/json'
        }
    });
    setTimeout(() => {
        window.location.href = 'index.html'
    }, 220);    
    } catch (error) {
        console.log(error);
    }
}