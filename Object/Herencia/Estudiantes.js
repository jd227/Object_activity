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
}