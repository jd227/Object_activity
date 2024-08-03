class Persona {
    #nombre = '';
    #edad = 0;
    #fechaNacimiento = '';
  
    constructor(nombre, edad, fechaNacimiento) {
      this.establecerNombre(nombre);
      this.establecerEdad(edad);
      this.establecerFechaNacimiento(fechaNacimiento);
    }
  
    establecerNombre(nombre) {
      if (typeof nombre === 'string' && nombre.trim() !== '') {
        this.#nombre = nombre;
      } else {
        console.log(Error('Nombre no válido.'));
      }
    }
  
    obtenerNombre() {
      return this.#nombre;
    }
  
    establecerEdad(edad) {
      if (typeof edad === 'number' && edad > 0) {
        this.#edad = edad;
      } else {
        console.log(Error('Edad no válida.'));
      }
    }
  
    obtenerEdad() {
      return this.#edad;
    }
  
    establecerFechaNacimiento(fechaNacimiento) {
      if (typeof fechaNacimiento === 'string' && fechaNacimiento.trim() !== '') {
        this.#fechaNacimiento = fechaNacimiento;
      } else {
        console.log(Error('Fecha de nacimiento no válida.'));
      }
    }
  
    obtenerFechaNacimiento() {
      return this.#fechaNacimiento;
    }
  
    // Método para calcular la fecha de nacimiento a partir de la edad
    calcularFechaNacimiento() {
      const fechaActual = new Date();
      const añoNacimiento = fechaActual.getFullYear() - this.#edad;
      const fechaNacimiento = new Date(fechaActual.setFullYear(añoNacimiento));
      this.#fechaNacimiento = fechaNacimiento;
    }
  
    // Método para calcular la edad a partir de la fecha de nacimiento
    calcularEdad() {
      const fechaActual = new Date();
      const fechaNacimiento = new Date(this.#fechaNacimiento);
      let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
      const diferenciaMeses = fechaActual.getMonth() - fechaNacimiento.getMonth();
      if (
        diferenciaMeses < 0 ||
        (diferenciaMeses === 0 && fechaActual.getDate() < fechaNacimiento.getDate())
      ) {
        edad--;
      }
      return edad;
    }
  }

  Persona.establecerNombre('David');
  Persona.establecerEdad(30);
  console.log(Persona.obtenerNombre());
  console.log(Persona.obtenerEdad());
  console.log(Persona.obtenerFechaNacimiento());