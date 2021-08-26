//----------- CALLBACKS -----------//

const getUsuarioById = ( id, callback ) => {

    const user = {
        id, // Podemos ponerlo así cuando una propiedad es igual al argumento
        nombre: 'Sergio'
    }

    setTimeout( ()=> {
        callback(user);
    }, 1500);

}



// Si quisieramos imprimir el id y el nombre en mayúsculas
getUsuarioById (10, (usuario) => {
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase() ); // => SERGIO
});