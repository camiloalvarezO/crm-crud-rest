const url = `http://localhost:4000/clientes`;

export const nuevoCliente =async cliente =>{
    
    try {
        await fetch(url,{
            method: "POST",
            body: JSON.stringify( cliente ),
            headers: {
                'Content-Type' : 'application/json'
            }
        });
        window.location.href = 'index.html'
    } catch (error) {
        console.log(error);
    }
}

export const obtenerClientes = async () =>{
    try {
        const respuesta = await fetch(url)
        const clientes = await respuesta.json()
        return clientes
    } catch (error) {
        console.log(error);
    }

}

export const eliminarCliente = async id =>{
    try {
        await fetch(`${url}/${id}`,{
            method : 'DELETE'
        })
    } catch (error) {
        console.log(error)
    }
}

export const editarCliente = async (id)=>{
    try {
        const respuesta = await fetch(`${url}/${id}`)
        const cliente = respuesta.json()
        return cliente
    } catch (error) {
        console.log(error);
    }
}  

export const actualizarCliente = async (cliente) =>{
    try {
        const {id}=cliente;
        console.log(`${url}/${id}`);
        debugger;
        await fetch(`${url}/${id}`,{
            method:'PUT',
            body: JSON.stringify(cliente),
            headers:{
                'Content-Type' : 'Application/json'
            }
        })
        window.location.href = 'index.html'
    } catch (error) {
        console.log(error);
    }
}