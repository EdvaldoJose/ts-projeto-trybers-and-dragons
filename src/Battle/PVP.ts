// Req-10
import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _firstPlayer: Fighter;
  private _secondPlayer: Fighter;

  constructor(firstPlayer: Fighter, secondPlayer: Fighter) {
    super(firstPlayer);
    
    this._firstPlayer = firstPlayer;
    this._secondPlayer = secondPlayer;
  }

  fightToDeath() {
    this._firstPlayer.attack(this._secondPlayer);

    if (this._secondPlayer.lifePoints < 0) return 1;
    this._secondPlayer.attack(this._firstPlayer);

    if (this._firstPlayer.lifePoints < 0) return -1;
    return 0;
  }

  fight(): number {
    const result = this.fightToDeath();

    if (result === 0) {
      return this.fight();
    }
    return result;
  }
}