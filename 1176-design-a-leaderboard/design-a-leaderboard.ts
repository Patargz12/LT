class Leaderboard {
  private scores: Map<number, number>;
  constructor() {
    this.scores = new Map();
  }
  addScore(playerId: number, score: number): void {
    this.scores.set(playerId, (this.scores.get(playerId) || 0) + score);
  }
  top(K: number): number {
    return Array.from(this.scores.values()).sort((a, b) => b - a).slice(0, K).reduce((s, v) => s + v, 0);
  }
  reset(playerId: number): void {
    this.scores.delete(playerId);
  }
}
