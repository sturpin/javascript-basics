//-------- ASYNC-AWAIT --------//

const empleados = [
    {
        id: 1,
        nombre: 'Sergio'
    },
    {
        id: 2,
        nombre: 'May'
    },
    {
        id: 3,
        nombre: 'Claudia'
    },
    {
        id: 4,
        nombre: 'Borja'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    },
    {
        id: 3,
        salario: 2000
    }
];


const getEmpleado = ( id ) => {

    return new Promise( (resolve, reject) => {

        const empleado = empleados.find (e => e.id === id)?.nombre;
        
        ( empleado ) 
            ? resolve(empleado)
            : reject(`No existe el empleado con el id ${id}.`);
    });
}


const getSalario = ( id ) => {

    return new Promise( (resolve, reject) => {

    const salario = salarios.find (s => s.id === id)?.salario;

    ( salario )
        ? resolve(salario)
        : reject(`El empleado con el id ${id} no tiene salario.`);

    });
}


getInfoUsuario = async( id ) => {

    try {
        const empleado = await getEmpleado( id );
        const salario = await getSalario( id );

        return `El empleado ${empleado} tiene un salario de ${salario}`;

    } catch(err) {
        throw err;
    }

}

const id = 4;

getInfoUsuario( id )
    .then( msg => console.log(msg) ) // => El empleado con el id 4 no tiene salario.
    .catch( err => console.log(err) );