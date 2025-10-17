class MyCalendar {
  private events: [number, number][]

  constructor() {
    this.events = []
  }

  book(start: number, end: number): boolean {
    for (const [s, e] of this.events) {
      if (Math.max(s, start) < Math.min(e, end)) return false
    }
    this.events.push([start, end])
    return true
  }
}
