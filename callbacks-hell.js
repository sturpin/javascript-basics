//--------- CALLBACKS HELL ---------//

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


const getEmpleado = ( id, callback ) => {

    const empleado = empleados.find (e => e.id === id)?.nombre // "e" es un predicado, un callback que representa a un empleado

    if (empleado) {
        // Como el empleado existe, como primer argumento mando null
        callback(null, empleado);
    } else {
        callback( `El empleado con id ${id} no existe.`);
    }
}

const getSalario = (id, callback) => {

    const salario = salarios.find(s => s.id === id)?.salario // Si existe ejecuto lo siguiente .salario

    if (salario) {
        callback(null, salario);
    } else {
        callback (`Este empleado con id ${id} no tiene salario.`);
    }
}


// id empleado
const id = 3;

getEmpleado (id, (err, empleado) => {

    if (err) {
        console.log('ERROR!');
        return console.log(err);
    }

    getSalario (id, (err, salario) => {
    
        if (err) {
            console.log('ERROR!');
            return console.log(err);
        }
    
        console.log('El empleado', empleado, 'tiene un salario de', salario);
        // => El empleado Claudia tiene un salario de 2000
    });

});


