import { LeafComponent } from './type'

class RadioComponent implements LeafComponent {
  constructor(
    public name: string,
    public options: string[],
    public title?: string,
    public isHidden?: string
  ) {}
}

export default RadioComponent
