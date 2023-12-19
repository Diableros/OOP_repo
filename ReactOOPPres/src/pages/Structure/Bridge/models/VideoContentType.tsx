import { ContentTypeImplementation } from './types'
import VideoContentThumbnail from '../components/VideoContent/VideoContentThumbnail.tsx'
import VideoContentCaption from '../components/VideoContent/VideoContentCaption.tsx'
import VideoContentTitle from '../components/VideoContent/VideoContentTitle.tsx'
import VideoContentLink from '../components/VideoContent/VideoContentLink.tsx'
export class VideoContentType implements ContentTypeImplementation {
  constructor(
    public id: string,
    private title: string,
    private description: string,
    private thumbnailUrl: string,
    private url: string
  ) {}

  renderThumbnail() {
    return () => <VideoContentThumbnail thumbnailUrl={this.thumbnailUrl} />
  }

  renderCaption() {
    return () => <VideoContentCaption description={this.description} />
  }

  renderTitle() {
    return () => <VideoContentTitle title={this.title} />
  }

  renderLink() {
    return () => <VideoContentLink url={this.url} />
  }
}
