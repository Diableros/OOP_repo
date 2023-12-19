import React from 'react'

export interface ContentTypeImplementation {
  id: string
  renderTitle(): React.FC
  renderCaption(): React.FC
  renderThumbnail(): React.FC
  renderLink(): React.FC
}
