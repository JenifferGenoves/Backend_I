/* Ejercicio Hands on Lab - Registrador de Tickets de eventos

Se creará una clase que permitirá llevar una gestión completa de usuarios que deseen acceder a dichos eventos.
1. Definir clase TicketManager, el cual tendrá un arreglo de eventos que iniciará vacío
2. La clase debe contar con una variable privada “precioBaseDeGanancia”, la cual añadirá un costo adicional al precio de cada evento.
3. Debe contar con el método “getEventos” El cual mostrará los eventos guardados.
4. Debe contar con el método “agregarEvento” El cual recibirá los siguientes parámetros:
    nombre
    lugar
    precio (deberá agregarse un 0.15 del valor original)
    capacidad (50 por defecto)
    fecha (hoy por defecto)
El método deberá crear además el campo id autoincrementable y el campo “participantes” que siempre iniciará con un arreglo vacío.

5. Debe contar con un método “agregarUsuario” El cual recibirá:
    id del evento (debe existir, agregar validaciones)
    id del usuario
El método debe evaluar que el evento exista y que el usuario no haya estado registrado previamente (validación de fecha y capacidad se evitará para no alargar el reto)
Si todo está en orden, debe agregar el id del usuario en el arreglo “participantes” de ese evento.
6. Debe contar con un método “ponerEventoEnGira” El cual recibirá:
    id del evento
    nueva localidad
    nueva fecha
El método debe copiar el evento existente, con una nueva localidad, nueva fecha, nuevo id y sus participantes vacíos (Usar spread operator para el resto de las propiedades)

*/ 




class TicketManager {
    constructor() {
        this.eventos = []
        this.precioBaseDeGanancias = 0
    }

    getEventos() {
        return this.eventos
    }

    agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
        precio += precio * 0.15 //agregar el 15% al precio original
        const evento_id = this.eventos.length + 1
        const participantes = []
        const evento = {
            id: evento_id,
            nombre,
            lugar,
            precio,
            capacidad,
            fecha,
            participantes
        }
        this.eventos.push(evento)
    }

    agregarUsuario(evento_id, usuario_id) {
        const evento_encontrado = this.eventos.find((evento) => evento.id === evento_id)
        if (!evento_encontrado) {
            console.log("El evento con el id proporcionado no exise")
            return
        }

        const participantes = evento_encontrado.participantes
        const usuarioRegistrado = participantes.includes(usuario_id)
        if (usuarioRegistrado) {
            console.log("El usuario ya esta registrado para el evento")
            return
        }

        participantes.push(usuario_id)
        console.log("El usuario ha sido registrado exitosamente")
    }

    ponerEventoEnGira(evento_id, nueva_localidad, nueva_fecha) {
        const evento_encontrado = this.eventos.find((evento) => evento.id === evento_id)
        if (!evento_encontrado) {
            console.log("El evento con el id proporcionado no existe")
            return
        }

        const evento_copiado = { ...evento_encontrado }
        evento_copiado.id = this.eventos.length + 1
        evento_copiado.lugar = nueva_localidad
        evento_copiado.fecha = nueva_fecha
        evento_copiado.participantes = []

        this.eventos.push(evento_copiado)
        console.log("Evento puesto en gira")
    }
}


const ticketManager = new TicketManager()

//Agregar eventos
ticketManager.agregarEvento("Concierto Maria Becerra", "Estadio Velez", 100, 2000, new Date("2024-09-15"))
ticketManager.agregarEvento("Concierto Nicky Nicole", "Estadio Kempes", 200, 2500, new Date("2024-10-20"))

// Obtener los eventos
const eventos = ticketManager.getEventos()
console.log("Eventos: ", eventos)

//Agregar participantes
ticketManager.agregarUsuario(1, "Usuarios 1")
ticketManager.agregarUsuario(1, "Usuarios 3")

ticketManager.agregarUsuario(2, "Usuarios 2")

// Poner evento en gira
ticketManager.ponerEventoEnGira(1, "Mendoza", new Date("2024-12-20"))


const eventosActualizados = ticketManager.getEventos()
console.log("Eventos actualizados: ", eventosActualizados)