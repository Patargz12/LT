class ParkingSystem {
  private slots: number[];

  constructor(big: number, medium: number, small: number) {
    this.slots = [big, medium, small];
  }

  addCar(carType: number): boolean {
    if (this.slots[carType - 1] > 0) {
      this.slots[carType - 1]--;
      return true;
    }
    return false;
  }
}