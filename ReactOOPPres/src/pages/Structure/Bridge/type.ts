export type PostContent = {
  id: string
  title: string
  caption: string
  imageURL: string
  url: string
  type: 'post'
}

export type VideoContent = {
  id: string
  title: string
  description: string
  thumbnailUrl: string
  url: string
  type: 'video'
}

export type VoteContent = {
  id: string
  title: string
  options: string[]
  thumbnailUrl: string
  url: string
  type: 'vote'
}
