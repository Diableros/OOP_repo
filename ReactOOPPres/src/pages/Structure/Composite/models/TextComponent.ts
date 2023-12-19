import { LeafComponent } from './type'

class TextComponent implements LeafComponent {
  public name = 'simple-text'
  constructor(
    public text: string,
    public isHidden?: string
  ) {}
}

export default TextComponent
