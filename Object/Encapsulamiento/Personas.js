class Persona {
    #nombre='';
    #edad=0;
    #fechaNacimiento='';
  
    constructor(nombre, edad, fechaNacimiento) {
      this.establecerNombre(nombre);
      this.establecerEdad(edad);
      this.establecerFechaNacimiento(fechaNacimiento);
    }
  

    establecerNombre(nombre) {
      if (typeof nombre === 'string' && nombre() !== '') {
        this.#nombre = nombre;
      } else {
        console.log(Error('Nombre no válido.'));
      }
    }
obtenerNombre(){
    return this.#nombre;
}

    establecerEdad(edad) {
      if (typeof edad === 'number' && edad > 0) {
        this.#edad = edad;
      } else {
        console.log(Error('Edad no válida.'));
      }
    }

    obtenerEdad(){
        return this.#edad;
    }

    establecerFechaNacimiento(fechaNacimiento){
        if (typeof fechaNacimiento === 'string' && fechaNacimiento !== '') {
            this.#fechaNacimiento = fechaNacimiento;
          } else {
            console.log(Error('Fecha de nacimiento no válida.'));
          }
    }
obtenerFechaNacimiento(fechaNacimiento){
    return this.#fechaNacimiento
}

}