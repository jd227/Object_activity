class Empleado {
    nombre;
    salario;
  
    constructor(nombre, salario) {
      this.nombre = nombre;
      this.salario = salario;
    }
  
    obtenerNombre() {
      return this.nombre;
    }
  
    obtenerSalario() {
      return this.salario;
    }
  
    calcularSalario() {
      return this.salario;
    }
  }
  
  export default Empleado;
  