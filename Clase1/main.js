// Ejercicio

// Definir variables

let firstName = "Nicolas";
let age = 35;
let price = [20.99, 49.99, 9.99];
let series = ["Modern Family", "Game of thrones", "Succession"];
let movies = ["The Matrix", "Interstellar", "The Lord of the Rings"];

/*

// Mostrar valores en consola

console.log("FirstName:", firstName);
console.log("Age:", age);
console.log("Price:", price);
console.log("Series", series);
console.log("Movies:", movies);

// Incrementar edad y serie

age += 1;
series.push("Breaking Bad")

// Mostrar valores en consola

console.log("Valores actualizados:");
console.log("FirstName:", firstName);
console.log("Age:", age);
console.log("Price:", price);
console.log("Series", series);
console.log("Movies:", movies);

*/

// Función para mostrar valores en la consola

const showValues =  ({ firstName, age, price, series, movies}) => {
    console.log(`FirstName: ${firstName}`);
    console.log(`Agae: ${age}`);
    console.log(`Price: ${price}`);
    console.log(`Series: ${series}`);
    console.log(`Movies: ${movies}`);

};

// Mostrar los valores iniciales

showValues({ firstName, age, price, movies });

// Incrementar la edad y agregar serie

age++;
series.push("Breaking Bad");

// Volver a mostrar valores actualizados

console.log("Updated values:");
showValues({ firstName, age, price, series, movies });

/* Ejercicio: Definir una funcion mostrarlista, la cual recibirá un arreglo con elementos como parametro. 
Si la lista está vacía, devolver un mensaje indicando lista vacía. 
Si la lista cuenta con elementos mostrarlos uno a uno en la consola. 
Finalizar el proceso devolviendo la longitud de la lista (utiliizar template strings)
Invocar la funcion con lo casos de prueba

*/ 
function mostrarLista (lista) {
    // Verificar lista vacía
    if (lista.length === 0) {
        console.log("La lista está vacía");
    } else {
        // Mostrar elementos de la lista
        lista.forEach((elemento, index) => {
            console.log(`Elemento ${index + 1}: ${elemento}`);
        });
    }
    // Devolver la longitud de la lista usando template string
    return `La longitud de la lista es: ${lista.length}`;
    
    }
    
    // Casos de prueba
    
    // Lista vacía
    let listaVacia = [];
    console.log(mostrarLista(listaVacia));
    
    // Lista con elementos
    let listaConElementos = ["Manzana", "Plátano", "Frutillas"];
    console.log(mostrarLista(listaConElementos))
    
    // Otra lista con elementos
    let otraLista = [1, 2, 3, 4, 5, 6];
    console.log(mostrarLista(otraLista));

/* Ejercicio: Declarar clasde persona, la cual debe crearse con un nombre que identifique la instancia
Habra una variable statica utilizable para todos
se comprobará la individualidad entre las dos instancias
*/

class Persona {
    constructor(nombre){
        this.nombre = nombre;
    }
    static especie = "humano";
    saludar = () => {
        console.log(`Hola, soy ${this.nombre}, mucho gusto!`)
    }
    getEspecie = () => {
        console.log(`Aunque no lo creas, soy un ${Persona.especie}`);

    }
}

let persona1 = new Persona("Jorge");
let persona2 = new Persona("Catalina");

persona1.saludar();
persona2.saludar();
persona1.getEspecie();
persona2.getEspecie();

    