//----------- CONS -----------//
const nombre = 'Sergio';
const apellido = 'Turpín';

//--- Template String utilizando Backtick ---//
const ts = `${nombre} ${apellido}`; 
console.log(ts); // => Sergio Turpín


// Dentro de  ${} puedo utilizar operaciones de JS
const suma = `${1+1}`;
console.log(suma); // => 2