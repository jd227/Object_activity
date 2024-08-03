const Persona = require("../Encapsulamiento/Personas.js")

class Estudiante extends Persona {
    grado;
    constructor(nombre, edad, fechaNacimiento, gardo){
        super(nombre, edad, fechaNacimiento);
        this.grado = grado;
    }
    obtenerGrado(){
        return this.grado;
    }

    establecerGrado(grado){
        if(typeof grado === 'string' && grado.trim() !== ''){
            this.grado = grado;
        }else{
            throw new Error('Grado invalido');
        }
    }

    toString(){
        return `Nombre: ${this.obtenerNombre()}, Edad: ${this.obtenerEdad()}, Fecha de nacimiento: ${this.obtenerFechaNacimiento()}, Grado: ${this.obtenerGrado()}`
    }
}

const estudiante = new Estudiante ('David', 20, new Date('2000-10-08'), 'Universitario');
console.log(estudiante.toString());