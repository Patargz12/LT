class UndergroundSystem {
  private checkIns: Map<number, { station: string; time: number }>;
  private trips: Map<string, { total: number; count: number }>;

  constructor() {
    this.checkIns = new Map();
    this.trips = new Map();
  }

  checkIn(id: number, stationName: string, t: number): void {
    this.checkIns.set(id, { station: stationName, time: t });
  }

  checkOut(id: number, stationName: string, t: number): void {
    const checkIn = this.checkIns.get(id)!;
    const duration = t - checkIn.time;
    const route = `${checkIn.station}->${stationName}`;

    const trip = this.trips.get(route) || { total: 0, count: 0 };
    trip.total += duration;
    trip.count++;
    this.trips.set(route, trip);

    this.checkIns.delete(id);
  }

  getAverageTime(startStation: string, endStation: string): number {
    const route = `${startStation}->${endStation}`;
    const trip = this.trips.get(route)!;
    return trip.total / trip.count;
  }
}