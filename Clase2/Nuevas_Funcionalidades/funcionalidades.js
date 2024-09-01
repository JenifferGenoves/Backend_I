// operador exponencial

// let resultado = 2 ** 3
let base = 5
let exponente = 2
let resultados2 = base ** exponente
let resultados3 = 2 ** 3 ** 2

console.log(resultados2);

// Array.includes: Verificar si dentro de un arreglo existe un valor

const numeros = [1, 2, 3, 4]
const bebidas = ["cafe", "te", "mate"]

console.log(numeros.includes(2))
console.log(numeros.includes(5))
console.log(bebidas.includes("cafe"))
console.log(bebidas.includes("agua"))


// operador nullish

const nombre = null
const nombrePorDefecto = "coderhouse"
const nombrecompleto = nombre ?? nombrePorDefecto

console.log(nombrecompleto);


// Object.entries, object.values, Object.keys

const persona = {
    nombre: "Coder",
    edad: 25,
    ciudad: "Santiago"
}

const entradas = Object.entries(persona)
const valores = Object.values(persona)
const claves = Object.keys(persona)

console.log(entradas);
console.log(valores);
console.log(claves);

// .finally(): Siempre ejecuta una misma sentencia, una misma línea de código

function ejemploPromesa() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
             const exito = true // Siempre se ejecuta el finally, cuando es falso tb y da error

            if (exito) {
                resolve("Exito")
            } else {
                reject("Error")
            }
        }, 5000);
    })
}

ejemploPromesa()
.then((resultado)=> {
    console.log(resultado)

})
.catch((error) => {
    console.log(error)
})
.finally(() => {
    console.log("La promesa ha sido finalizada")
})


// Spread Operator

const numbers = [1, 2, 3]
const newnumbers = [... numbers, 4, 5]

console.log(newnumbers)


// Rest Operator 

function sum (...numbers){
let total = 0
for(let number of numbers){
    total += number
}
return total
}

console.log(sum(4, 5, 6, 7));

/* EJERICIO: Dados los objetos
Realizar una lista nueva  (array) que contenga todos los tipos de productos (no cantidades)
Consejo: utilizar Object.keys y Array.includes. Mostrar el array por consola.
Posteriormente, obtener el total de productos vendidos por todos los objetos (utilizar Object.values)*/

const objetos = [
    {
        manzanas: 3,
        peras: 2,
        carne: 1,
        jugos: 5,
        dulces: 2
    },
{
    manzanas: 1,
    sandias: 1,
    huevos: 6,
    jugos: 1,
    panes: 4
}

];

// Crear una lista nueva con los tipos de productos

let productos = [];

objetos.forEach(objeto => {
    Object.keys(objeto).forEach(producto => {
        if (!productos.includes(producto)) {
            productos.push(producto);
        }
    });
});

console.log("Productos:", productos);

// Obtener el total de productos vendidos

let productosVendidos = 0;

objetos.forEach(objeto => {
    Object.values(objeto).forEach(cantidad => {
        productosVendidos += cantidad;
    });
});

console.log("Productos vendidos", productosVendidos);


// String.trim(): Elimina los espacios

const textoConEspacios = "             Soy un string             "
const sinEspacios = textoConEspacios.trim()

console.log(sinEspacios);

// Array.flat(): Aplanar la estructura de una matriz en una bidemencional

const matriz = [1, 2, [3, 4], [5, 6]]
const matrizAplanada = matriz.flat()

console.log(matrizAplanada)

