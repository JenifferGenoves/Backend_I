// Identificar los tipo de datos

let people = [
    {id: 1, first_name: "Luz", last_name: "Escalante", age: 25, gender:"F"},
    {id: 2, first_name: "Bruno", last_name: "Guerra", age: 18, gender:"M"},
    {id: 3, first_name: "Marisol", last_name: "Cadena", age: 23, gender:"F"},
    {id: 4, first_name: "Franco", last_name: "Cachagua", age: 30, gender:"M"},
    
];

let person = people.find(p=> {
let test;
test = p.id == 3;
return test;

})

console.log(person);


/*

Respuesta:
- Variable people es un array
- Cada elemento dentro del array people es un objeto que contiene varias
propiedades (id: number, first_name: string, last_name: string, age: number y gender: string)
- Método find: Se usa para encontrar el primer elemento que cumpla con la condición especificada
- Arrow function: Se utiliza arrow function para definir la condicón de búsqueda, la función recibe
un parámetro p (cada objeto del array) y retorna true si p=3

*/

// Let vs const

// En este ejemplo la variable i es global y la variable j es local

let i = 0
function foo () {
    i = 1;
    let j = 2;
    if(true) {
        console.log(i); // 1
        console.log(j); // 2
    }
}

foo ();

function foo () {
    let i = 0;
    if(true) {
        // sería otra variable i
        // solo para el bloque if
    let i = 1;
    console.log(i); // 1
    
    }
    console.log(i); // 0
}

foo ();

/* Fuera del bloque donde se declara con let, la variable no está definida

function foo () {
    if(true){
        let i = 1;
    }
    // ReferenceError: i is not defined
}

foo ();

*/

// Al igual que con let, el scope para una variable declarada con const es el bloque, const prohibe la reasignación de valores

/* 
const i = 0;
i = 1;


const user = " Juan";
// TypeErrror: Assignment to constant
user = "Manolo";
*/


// No reasiganble distinto a Inmutable
// Ejemplo de mutabilidad

const user = { name: "Juan" };
user.name = "Manolo";

console.log(user.name); // Manolo