//----------- VAR -----------//
//-----(No recomendadas)-----//

var nombre = 'Sergio';

if (true) {
    // Podemos re-declarar esta variable ya que 
    // nos encontramos en un scope diferente
    var nombre = 'Javier';
    console.log(nombre); // => Javier
}

console.log(nombre); // => Sergio



//----------- CONST -----------//

const apellido = 'Turpín'

if (true) {
    // Podemos re-declarar esta constante ya que 
    // nos encontramos en un scope diferente
    const apellido = 'Moreno'
    console.log(apellido); // => Moreno
}

console.log(apellido); // => Turpín



//----------- LET -----------//

let apodo = 'Supermirafiori'

if (true) {
    // Es un scope diferente
    // No re-declaramos la variable
    apodo = 'Sofim'
}

console.log(apodo); // => Sofim