class Twitter {
    private followMap: Map<number, Set<number>>;
    private tweets: Map<number, Array<{ tweetId: number; timestamp: number }>>;
    private timeCounter: number;

    constructor() {
        this.followMap = new Map();
        this.tweets = new Map();
        this.timeCounter = 0;
    }

    postTweet(userId: number, tweetId: number): void {
        if (!this.tweets.has(userId)) {
            this.tweets.set(userId, []);
        }
        this.tweets.get(userId)!.push({ tweetId, timestamp: this.timeCounter++ });
    }

    getNewsFeed(userId: number): number[] {
        const result: Array<{ tweetId: number; timestamp: number }> = [];
        
        if (this.tweets.has(userId)) {
            result.push(...this.tweets.get(userId)!);
        }
        
        const following = this.followMap.get(userId);
        if (following) {
            for (const followeeId of following) {
                if (this.tweets.has(followeeId)) {
                    result.push(...this.tweets.get(followeeId)!);
                }
            }
        }
        
        result.sort((a, b) => b.timestamp - a.timestamp);
        return result.slice(0, 10).map(tweet => tweet.tweetId);
    }

    follow(followerId: number, followeeId: number): void {
        if (followerId === followeeId) return;
        
        if (!this.followMap.has(followerId)) {
            this.followMap.set(followerId, new Set());
        }
        this.followMap.get(followerId)!.add(followeeId);
    }

    unfollow(followerId: number, followeeId: number): void {
        const following = this.followMap.get(followerId);
        if (following) {
            following.delete(followeeId);
        }
    }
}