import { FormComponent } from './type'

class CompositeComponent implements FormComponent {
  public childrenComponents: FormComponent[] = []

  constructor(
    public dropdown = false,
    public titleDropdown?: string,
    public isHidden?: string
  ) {}

  public listHiddenChildren(
    childrenComponents: FormComponent[]
  ): Record<string, boolean> {
    return childrenComponents.reduce<Record<string, boolean>>(
      (acc, current) => {
        if (!current.isHidden) return acc
        acc[current.isHidden] = true
        return acc
      },
      {}
    )
  }

  public add(component: FormComponent) {
    this.childrenComponents.push(component)
  }
}

export default CompositeComponent
