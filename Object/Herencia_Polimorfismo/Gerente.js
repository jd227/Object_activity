import Empleado from "./empleado";

class Gerente extends Empleado {
  bono;

  constructor(nombre, salario, bono) {
    super(nombre, salario);
    this.bono = bono;
  }

  calcularSalario() {
    return super.obtenerSalario() + this.bono;
  }
}

const gerente = new Gerente('Carlos', 5000, 1000);
console.log(gerente.obtenerNombre()); 
console.log(gerente.calcularSalario());
