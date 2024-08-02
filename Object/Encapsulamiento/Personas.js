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
      if (typeof nombre === 'string' && nombre.trim() !== '') {
        this.#nombre = nombre;
      } else {
        throw new Error('Nombre no válido.');
      }
      
    }
}