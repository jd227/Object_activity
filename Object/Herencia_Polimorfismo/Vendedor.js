import Empleado from "./empleado";

class Vendedor extends Empleado {
  comision;

  constructor(nombre, salario, comision) {
    super(nombre, salario);
    this.comision = comision;
  }

  calcularSalario() {
    return super.obtenerSalario() + this.comision;
  }
}


const vendedor = new Vendedor('Melissa', 3000, 500);
console.log(vendedor.obtenerNombre());
console.log(vendedor.calcularSalario()); 
