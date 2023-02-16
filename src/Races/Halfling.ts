// Req-02
import Race from './Race';

export default class Halfling extends Race {
  static instances = 0;
  private _maxLifePoints = 60;

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    Halfling.instances += 1;
    return Halfling.instances;
  }
}