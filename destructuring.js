const musico = {
    nombre: 'Sergio',
    apellido: 'Turpín',
    instrumento: 'Batería',
    getNombre () {
        return `${this.nombre} ${this.instrumento}`;
    }
}

console.log(musico.getNombre()); // => Sergio Batería



//--- DESESTRUCTURACION ---//

const { nombre, instrumento } = musico;
console.log(nombre, instrumento); // => Sergio Batería



//--- DESESTRUCTURACION EN FUNCIONES ---//
// Se puede realizar la desestructuracion en los argumentos de la función

function imprimeMusico ({ nombre, instrumento }) {
    console.log(nombre, instrumento);
}

imprimeMusico (musico); // => Sergio Batería



//--- DESESTRUCTURACION EN ARREGLOS ---//

const instrumentos = ['Guitarra', 'Bajo', 'Órgano'];
const [i1, i2, i3] = instrumentos;
console.log(i1, i2, i3); // => Guitarra Bajo Órgano

// Si quisiera imprimir solo el tercer instrumento
// le pongo una , (coma) para especificar que no te interesa ese índice

const [ , , instrumento3] = instrumentos; 
console.log(instrumento3); // => Órgano