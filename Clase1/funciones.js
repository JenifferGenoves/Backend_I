// Ejemplos de diferentes tipos de funciones, las funciones son bloques que trabajan sobre scope interno (local)

function nameOfFunction(parameters) {
    /* Cuerpo de la función, todas las instrucciones 
    internas que necesitamos que la función realice
    */
   let variableForMyFunction = 2;
   return variableForMyFunction;
   /* Con la palabra return podemos mandar fuera del scope
   alguna variable que necesite en otra parte del código
   */
}

// Ejemplo completo
function addTwoNumbers(number1, number2) {
    // Resultado solo existe dentro de la función
    let result;
    result = number1 + number2;
    /* Cuando la función acabe, result muere, así que hay que
    mandarla afuera
    */
   return result;
}
// Mandamos llamar a la función con valores reales
let total = addTwoNumbers(2, 3);
console.log(total); // 5


/* Una función flecha anónima, quiere decir:
No tiene nombre pero puede asignarse a una variable 
poder identificarse */

/*

const functionIdentifier(parameters) => {
Cuerpo de la función, todas las instrucciones 
internas que necesitamos que la función realice

    let variableForMyFunction = 2;
    return variableForMyFunction;
    Con la palabra return podemos mandar fuera del scope
   alguna variable que necesite en otra parte del código
   La función flecha cuenta con un return implícito
   

} */

/* Ejemplo completo

const addTwoNumbers = (number1, number2) => {
    let result;
    result = number1 + number2;
    return result;

}

const addReturnImplicit = (num1, num2) = num1 + numb2;

*/


/* Scopes: Define el alcance de una variable o constante, lo cual permite utilizar el mismo nombre para distintas variables

Scope Global: Afecta a todo el nivel del archivo en el que trabajamos
Scope Local: Afecta a la función o bloque en el que esté declarado
*/

// Scope no válido

/* Scope no válido: Si la variable está definida exclusivamente
dentro de la función, no será accesible desde fuera de la misma
o desde otras funciones

function exampleFunction () {
    // x solo se puede utilizar en exampleFunction
    const x = 'declarada en el scope local'
    console.log(x)
}

console.log(x); // ReferenceError: x is not defined

*/

// Escope válido

const x = 'Declarada en el scope Global';

function example() {
    console.log(x) // x existe acá adentro
}

example() // esto no lanza error

console.log(x); // x existe acá también


// Closures: Función que puede mantener variables declaradas de manera interna, desde que se implementaron clases en JS está en deshuso

// Clases: Representación de una entidad
// Funcionan como moldes, por lo que una vez definida una de estas podemos crear objetos con la misma forma y funcionalidades

class nombreDeMiClase {
    /* La clase cuenta con un método (función) constructor, este se ejecuta CADA VEZ QUE SE INSTANCIE EL OBJETO */
    constructor (parametrosDeCreacion) {
        console.log("Nuevo objeto creado");
        this.variableInterna = 2;
        /* Cada instancia de la clase contará con variables internas, para poder declararlas y utlilizarlas
        neceitamos utilizar un this. antes de cada variable
        */
    }

    static variableEstatica = 4;
    /* La palabra static es una variable que puede utilizarse SIN NECESITAR UNA INSTANCIA, además, todas sus instancias pueden acceder a ella de 
    igual manera. SI ALGUNA INSTANCIA CAMBIA LA VARIABLE ESTÁTICA, todas las instancias se enterarán
    */
   metodo1() {
    // Los metodos son funciones que solo pueden utilizar una instancia de la clase
    console.log("Soy un método de la clase");
   }
   metodo2 = () => {
    console.log(`Soy una función flecha, puedo incrustar variables: ${this.variableInterna}, todo dentro de una clase`)
   }
}

// Instanciar, para ello usamos el operador New, el cual crea un instancia de la clase

let instancia = new nombreDeMiClase (); // Se ejecutará el constructor diciendo nuevo objeto creado

// La instancia cuenta ahora con las variables y métodos definidos previamente
console.log(instancia.variableInterna);
instancia.metodo1();
instancia.metodo2();

// Para usar la variable estática no es necesaria la isntancia, simplemente lo llamamos desde la clase

nombreDeMiClase.variableEstatica;

// Como la variable es un molde, se peuden crear multiples instancas de esta

let instancia_2 = new nombreDeMiClase();
let instancia_3 = new nombreDeMiClase();

// Cada instancia será diferentede las otras en cuanto a sus variables y métodos (excepto la static)