import FiguraGeometrica from '../encapsulamiento/FiguraGeometrica.js';

class Rectangulo extends FiguraGeometrica {
  longitud;
  ancho;

  constructor(nombre, color, longitud, ancho) {
    super(nombre, color);
    this.longitud = longitud;
    this.ancho = ancho;
  }

  calcularArea() {
    return this.longitud * this.ancho;
  }

  calcularPerimetro() {
    return 2 * (this.longitud + this.ancho);
  }
}

const rectangulo = new Rectangulo('Rectángulo', 'Rojo', 5, 10);
console.log(rectangulo.obtenerNombre());
console.log(rectangulo.obtenerColor());
console.log(rectangulo.calcularArea()); 
console.log(rectangulo.calcularPerimetro());
