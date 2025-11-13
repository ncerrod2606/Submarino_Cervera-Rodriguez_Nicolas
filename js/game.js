import { UI } from "./UI.js";
import { GameSubmarine } from "./GameSubmarine.js";
import { Tablero } from "./Tablero.js";

UI.init({
  board: "gameBoard",
  status: "gameStatus",
  btnShot: document.getElementById('btnShot')

});
const tablero = new Tablero();
tablero.init({ size: 4 });
const gameInstance = new GameSubmarine(UI, tablero);


UI.btnShot.addEventListener("click", () => {
  const x = parseInt(document.getElementById("x").value);
  const y =parseInt(document.getElementById("y").value);
  gameInstance.shot(x, y);
});

/* Esto es otra forma, cuidado con la perdida del contexto this.
/*
UI.setEvent({
    btnShot: ['btnShot', gameInstance.shot.bind(gameInstance)]
});
*/

