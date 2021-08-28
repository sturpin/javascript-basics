//----------- PROMISES -----------//

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
        
        (empleado) 
            ? resolve(empleado)
            : reject(`No existe el empleado con el id ${id}.`);
    });
}


const getSalario = (id) => {

    return new Promise( (resolve, reject) => {

    const salario = salarios.find (s => s.id === id)?.salario;

    ( salario )
        ? resolve(salario)
        : reject(`El empleado con el id ${id} no tiene salario.`);

    });
}


// id empleado
const id = 2;

// nombre del empleado
let nombre;


getEmpleado(id)
    .then( empleado => {
        nombre = empleado;
        // En este punto sé que tengo un empleado, 
        // por ello puedo devolver una promesa y concatenarla
        return getSalario( id )
    })
    .then( salario => console.log('El empleado con el nombre',nombre,'tiene un salario de',salario))
    // => El empleado con el nombre May tiene un salario de 1500
    .catch( err => console.log( err ));
    // Con este catch manejo ambas excepciones