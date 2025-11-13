export class GameSubmarine {
    constructor(UIControl, tablero) {
        this.UIControl = UIControl;
        this.UIControl.start(this);
        this.tablero = tablero;
    }

   shot(x, y) {
    const hit = this.tablero.dispara(x,y);

    if (hit) {
      this.UIControl.changeStatus('Has ganado');
    } else {
      this.UIControl.changeStatus('Has fallado vuelve a intentarlo');
    }
  }
}