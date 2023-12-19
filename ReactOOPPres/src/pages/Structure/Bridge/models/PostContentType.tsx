import { ContentTypeImplementation } from './types'
import PostContentThumbnail from '../components/PostContent/PostContentThumbnail'
import PostContentCaption from '../components/PostContent/PostContentCaption'
import PostContentTitle from '../components/PostContent/PostContentTitle'
import PostContentLink from '../components/PostContent/PostContentLink'
export class PostContentType implements ContentTypeImplementation {
  constructor(
    public id: string,
    private title: string,
    private caption: string,
    private imageUrl: string,
    private url: string
  ) {}

  renderThumbnail() {
    return () => <PostContentThumbnail imageUrl={this.imageUrl} />
  }

  renderCaption() {
    return () => <PostContentCaption caption={this.caption} />
  }

  renderTitle() {
    return () => <PostContentTitle title={this.title} />
  }

  renderLink() {
    return () => <PostContentLink url={this.url} />
  }
}
