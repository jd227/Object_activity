class FiguraGeometrica {
    #nombre;
    #color;
  
    constructor(nombre, color) {
      this.establecerNombre(nombre);
      this.establecerColor(color);
    }
    establecerNombre(nombre) {
        if (typeof nombre === 'string' && nombre.trim() !== '') {
          this.#nombre = nombre;
        } else {
          throw new Error('Nombre inválido');
        }
      }
    
      obtenerNombre() {
        return this.#nombre;
      }gti
}  