// Req-02
import Race from './Race';

export default class Orc extends Race {
  static instances = 0;
  private _maxLifePoints = 74;

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    Orc.instances += 1;
    return Orc.instances;
  }
}