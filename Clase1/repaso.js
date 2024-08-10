// Consola Web

console.log("Mensaje Simple");
console.warn("Esto es una advertencia");
console.error("Esto es una error");

// console.clear()

console.log("abc");
console.log(1);
console.log(true);
console.log(null);
console.log(undefined);

// Arrays

console.log([1, 2, 3, 4]);

// Objeto

console.log({ a: 1, b: 2, c: 3 });

// Variables

let nombre = "Jeniffer";
let arreglo = ["A", "B", "C"];

console.log(arreglo);

/* Let vs const

Let permite inicializar variables sin datos
Let permite reemplazar el valor

const se debe inicializar con un valor
No permite reenombrar el valor

*/

let Nombre = "Coder";
Nombre = "House";
console.log(Nombre);

let House;
House = "Departamento";
console.log(House);

const fruit = "Apple";
console.log(fruit);

// Objetos

let alumno = {
  nombre: "Facundo",
  apellido: "Rainaudi",
  Edad: 25,
};

let alumnos = ["Felipe", 26, true, {}];

console.log(alumnos);

// Funciones

function myfunction() {
  // Cuerpo de la función
}

function sum(a, b) {
  // Devuelva resultado
  return a + b;
}
console.log(sum(2, 3));

function suma(a, b) {
  // console.log(a + b)
  let c = a + b;
  // return c
  console.log(c);
}
suma(4, 5);

// Funciones anónimas

let saludar = function (nombre) {
  // console.log("Hola" + nombre)
  console.log(`Hola ${nombre}`);
};

saludar("Martin");

// Se utiliza para simular la espera
setTimeout(function () {
  console.log("Han pasado 5 segundos");
}, 5000);

// Funciones flecha

// En las funciones normales tenemos esto:

const greeting = (name) => {
  // Cuerpo de la función
};

// Con la función flecha, los return nos quedan implicitos y se eliminan las llaves

const saludos = (nombre) => `Saludos ${nombre}`;

// Scope Global: Dentro de la función accedo a un valor que se encuentra dentro del scope global

let nombre1 = "Santiago";

function saludo() {
  console.log(`Hola ${nombre1}`);
}
saludo();

function restar(a, b) {
  let resultado = a - b;

  console.log(resultado);
}

restar(5, 3);

// console.log(resultado) - Esto da error porque estoy tratando de ingresae desde afuera a una variable que está dentro de una función

// Clases: Permite crear objetos siguiendo determinada estructura, parámetros y métodos

class NombreDeClase {
  constructor(parametros) {}
  // Los métodos son acciones y simulan funciones
  metodo1() {}
  metodo2() {}
}

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre}, y tengo ${this.edad} años`);
  }
}

// Instanciar la clase: LLamarla y crear mi objeto

let persona1 = new Persona("Katherine", 23);

console.log(persona1);

// Llamar al método
persona1.saludar();

console.log(persona1);

// Creación de clase contador

/*
Se creará una clase que permitirá llevar cuentas individuales según cada responsable.
Definir clase Contador
La clase se creará con un nombre, representando al responsable del contador.
El contador debe inicializarse en 0
Debe existir una variable estática que funcione como contador global de todas las instancias de contador creadas
Definir el método getResponsable, el cual debe devolver el responsable de dicho contador.
Definir el método contar, el cual debe incrementar, tanto su cuenta individual, como la cuenta global.
Definir el método getCuentaIndividual, el cual debe devolver sólo la cuenta individual del contador
Definir el método getCuentaGlobal, el cual debe devolver la variable estática con el conteo global.
Realizar prueba de individualidad entre las instancias.

*/

class Contador {
  static cuentaGlobal = 0;

  constructor(responsable) {
    this.responsable = responsable;
    this.cuentaIndividual = 0;
  }

  obtenerResponsable () {
    return this.responsable;
  }

  obtenerCuentaIndividual () {
    return this.cuentaIndividual;
  }

  static obtenerCuentaGlobal () {
    return Contador.cuentaGlobal
  }
  contar () {
    this.cuentaIndividual ++;
    Contador.cuentaGlobal ++;

  }
}

// Instanciar clase contador
const contador1 = new Contador("Facundo");

// Obtener responsable y cuenta individual
console.log(contador1.obtenerResponsable());
console.log(contador1.obtenerCuentaIndividual());

// Contar en cada instancia
contador1.contar();
contador1.contar();
contador1.contar();

console.log(contador1.obtenerCuentaIndividual());
console.log(Contador.obtenerCuentaGlobal());


