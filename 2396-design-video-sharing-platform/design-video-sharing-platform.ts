class VideoSharingPlatform {
  private videos: Map<number, { content: string; views: number; likes: number; dislikes: number }>
  private availableIds: number[]
  private nextId: number

  constructor() {
    this.videos = new Map()
    this.availableIds = []
    this.nextId = 0
  }

  upload(video: string): number {
    let id = this.availableIds.length > 0 ? this.availableIds.shift()! : this.nextId++
    this.videos.set(id, { content: video, views: 0, likes: 0, dislikes: 0 })
    return id
  }

  remove(videoId: number): void {
    if (this.videos.has(videoId)) {
      this.videos.delete(videoId)
      this.availableIds.push(videoId)
      this.availableIds.sort((a, b) => a - b)
    }
  }

  watch(videoId: number, startMinute: number, endMinute: number): string {
    const video = this.videos.get(videoId)
    if (!video) return "-1"
    video.views++
    return video.content.slice(startMinute, Math.min(endMinute, video.content.length - 1) + 1)
  }

  like(videoId: number): void {
    const video = this.videos.get(videoId)
    if (video) video.likes++
  }

  dislike(videoId: number): void {
    const video = this.videos.get(videoId)
    if (video) video.dislikes++
  }

  getLikesAndDislikes(videoId: number): number[] {
    const video = this.videos.get(videoId)
    return video ? [video.likes, video.dislikes] : [-1]
  }

  getViews(videoId: number): number {
    const video = this.videos.get(videoId)
    return video ? video.views : -1
  }
}
