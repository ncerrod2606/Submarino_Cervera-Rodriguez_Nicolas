export const UI = {
  status: null,
  table: null,
  sizes: null,
  game: null,
  control: {
    board: null,
    status: null,
  },
  setStatus: (message) => {
    UI.status.innerHTML = message;
  },
  init: (domControl, game) => {
    UI.control.board = document.getElementById(domControl.board);
    UI.control.status = document.getElementById(domControl.status);
    UI.control.btnShot = domControl.btnShot;
    UI.btnShot = UI.control.btnShot;
  },
  setEvent: (domControl) => {
    document
      .getElementById(domControl.btnShot[0])
      .addEventListener("click", () => {
        domControl.btnShot[1]();
      });
  },
  start(game) {
    UI.game = game;
    UI.control.status.textContent = "Juego iniciado";
  },
  changeStatus(newStatus) {
    UI.control.status.textContent = newStatus;
  },
};
