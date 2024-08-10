// operador exponencial

let resultadfo = 2 ** 3
let base = 5
let exponente = 2
let resultados2 = base ** exponente
let resultados3 = 2 ** 3 ** 2

// Array.includes

const numeros = [1, 2, 3, 4]
const bebidas = ["cafe", "te", "mate"]

console.log(numeros.includes(2))
console.log(numeros.includes(5))


// operador nullish

const nombre = null
const nombrePorDefecto = "coderhouse"
const nombrecompleto = nombre ?? nombrePorDefecto

// Object.entries, object.values, Object.keys

const persona = {
    nombre: "Coder",
    edad: 25,
    ciudad: "Santiago"
}

const entradas = Object.entries(persona)
const valores = Object.values(persona)
const claves = Object.keys(persona)

console.log(claves)

// .finally()

// function ejemploPromesa(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             const exito = true

//             if (exito) {
//                 resolve("Exito")


//             } else 
//         })
//     })
// }


// Spread Opertator

const numbers = [1, 2, 3]
const newnumbers = [... numeros, 4, 5]
console.log(newnumbers)


// Rest Operator 

function sum (...numbers){
let total = 0
for(let number of numbers){
    total +- number
}
return total
}

// EJERICIO

const objectos = [
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

] 

// String.trim()
const textoConEspacios = "       Soy un String     "
const sinEspacios = textoConEspacios.trim()

// Array.flat()

const matriz = [1, 2, 3, 4, 5, 6]

// Ejercicio Hands on Lab - Registrador de Tickets de eventos

class TicketsManager {
    
}


















