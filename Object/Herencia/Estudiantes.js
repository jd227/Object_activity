const Persona = require("../Encapsulamiento/Personas.js")

class Estudiante extends Persona {
    // crear un grado a la clase Estudiantes
    constructor (Clase){
        this.Clase = Clase;
    }
}