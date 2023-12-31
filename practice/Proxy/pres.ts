interface VideoInfo {
  author: string;
  title: string;
}

interface ThirdPartyYouTubeLib {
  listVideos: () => string[];
  getVideoInfo: (id: number) => VideoInfo;
  downloadVideo: (id: number) => HTMLVideoElement;
}

class ThirdPartyYouTubeClass implements ThirdPartyYouTubeLib {
  private videos: VideoInfo[] = [
    { author: 'MrBeast', title: '10.000 tnt' },
    { author: 'BabyShark', title: 'Baby Shark tururu' },
  ];

  listVideos(): string[] {
    // Simulate video listing
    return this.videos.map(
      (video, index) => `Video ${index + 1}: ${video.title}`,
    );
  }

  getVideoInfo(id: number): VideoInfo {
    const video = this.videos[id];
    if (!video) {
      throw new Error('No video found for the given ID');
    }
    return video;
  }

  downloadVideo(id: number): HTMLVideoElement {
    // Simulate video download
    if (!this.videos[id]) {
      throw new Error('No video to download for the given ID');
    }
    return document.createElement('video');
  }
}

class CachedYouTubeClass implements ThirdPartyYouTubeLib {
  private service: ThirdPartyYouTubeLib;
  private listCache: string[] | null = null;
  private videoCache: Map<number, VideoInfo> = new Map();
  private needReset: boolean = false;

  constructor(service: ThirdPartyYouTubeLib) {
    this.service = service;
  }

  listVideos(): string[] {
    if (this.listCache == null || this.needReset) {
      this.listCache = this.service.listVideos();
    }
    return this.listCache;
  }

  getVideoInfo(id: number): VideoInfo {
    if (!this.videoCache.has(id) || this.needReset) {
      const videoInfo = this.service.getVideoInfo(id);
      this.videoCache.set(id, videoInfo);
    }
    return this.videoCache.get(id)!;
  }

  downloadVideo(id: number): HTMLVideoElement {
    // Assuming downloadExists is a method to check if a video is already downloaded
    if (!this.downloadExists(id) || this.needReset) {
      return this.service.downloadVideo(id);
    } else {
      throw new Error(
        'Video is already downloaded or cannot be downloaded at this time',
      );
    }
  }

  private downloadExists(id: number): boolean {
    // Implement logic to check if the video is already downloaded
    return false;
  }
}

class YouTubeManager {
  private service: ThirdPartyYouTubeLib;

  constructor(service: ThirdPartyYouTubeLib) {
    this.service = service;
  }

  renderVideoPage(id: number): void {
    const info = this.service.getVideoInfo(id);
    console.log('Rendering video page for:', info.title);
  }

  renderListPanel(): void {
    const list = this.service.listVideos();
    console.log('Rendering list panel with videos:', list);
  }

  reactOnUserInput(id: number): void {
    this.renderVideoPage(id);
    this.renderListPanel();
  }
}

class Application {
  init() {
    const youTubeService = new ThirdPartyYouTubeClass();
    const youTubeProxy = new CachedYouTubeClass(youTubeService);
    const manager = new YouTubeManager(youTubeProxy);
    manager.reactOnUserInput(0); // Assuming 0 is a valid video ID for demo
  }
}

// Инициализация приложения
const app = new Application();
app.init();
