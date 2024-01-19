export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const uniqueSymbol = Symbol.for('car');
    this.constructor[uniqueSymbol] = this.constructor[uniqueSymbol] || class extends this.constructor {};
    return new this.constructor[uniqueSymbol]();
  }
}
