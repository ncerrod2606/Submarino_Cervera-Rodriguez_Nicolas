import { Submarino } from "./Submarino.js";
import { Celda } from "./Celda.js";
import { Vecinos } from "./Celda.js";

class Tablero {
  constructor() {
    this.tablero = null;
    this.size = 0;
    this.submarino = new Submarino();
    console.log("El tablero se ha creado");
  }

  init(config) {
    this.size = config.size;

    let malla = Array.from({ length: this.size }, (v, i) =>
      Array.from({ length: this.size }, (v, j) => new Celda(i, j))
    );
    malla.forEach((item, i) =>
      item.forEach((celda, j) => {
        if (i > 0) celda.nuevoVecino(Vecinos.ARRIBA, malla[i - 1][j]);
        if (i < this.size - 1)
          celda.nuevoVecino(Vecinos.ABAJO, malla[i + 1][j]);
        if (j > 0) celda.nuevoVecino(Vecinos.IZQUIERDA, malla[i][j - 1]);
        if (j < this.size - 1)
          celda.nuevoVecino(Vecinos.DERECHA, malla[i][j + 1]);
      })
    );
    this.tablero = malla.flat();
    this.submarino.init(this.size);

    const plantilla = document.getElementById("casilla-template2");
    const tabla = document.getElementById("tabla3");
    this.creaGridTemplate2(this.size, plantilla, tabla);
  }
  creaGridTemplate2(total, plantilla, tabla) {
    tabla.style.gridTemplateColumns = `repeat(${total}, 1fr)`;
    for (let i = 0; i < total * total; i++) {
      const clon = plantilla.content.cloneNode(true);
      clon.querySelector(".casilla").textContent = i + 1;
      tabla.appendChild(clon);
    }
  }

  dispara(x, y) {
    if (this.submarino.x === x && this.submarino.y === y) {
      return true;
    }

    let celda = this.tablero.find(
      (item) => item.x === this.submarino.x && item.y === this.submarino.y
    );
    this.submarino.mover(celda.vecinos.filter((item) => item != null));
    console.log(
      `Submarino se ha movido a: (${this.submarino.x}, ${this.submarino.y})`
    );
    console.log(this.tablero);
    return false;
  }
}

export { Tablero };
