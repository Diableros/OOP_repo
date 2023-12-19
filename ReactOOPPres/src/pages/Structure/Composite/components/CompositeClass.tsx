import { Collapse, Space } from 'antd'
import Input from './Input'
import Radio from './Radio'
import Checkbox from './Checkbox'
import Text from './Text'
import React from 'react'
import CompositeComponent from '../models/CompositeComponent'
import CheckboxComponent from '../models/CheckboxComponent'
import InputComponent from '../models/InputComponent'
import RadioComponent from '../models/RadioComponent'
import TextComponent from '../models/TextComponent'
import { CompositePropsType } from '../models/type'
import {
  HiddenStates,
  ValueLeaf,
  ValuesComposite
} from '@/pages/Structure/Composite/type.ts'

const Composite = ({
  content,
  onChangeValue = () => null,
  onChangeValues = () => null
}: CompositePropsType) => {
  const { childrenComponents, dropdown, titleDropdown, listHiddenChildren } =
    content

  const [hidden, setHidden] = React.useState<HiddenStates>(() =>
    listHiddenChildren(childrenComponents)
  )
  const values = React.useRef<ValuesComposite>({})

  const handleOnChange = (value: ValueLeaf, name?: string) => {
    if (!name) return

    if (name in hidden && typeof value === 'boolean') {
      setHidden(prev => ({ ...prev, [name]: !value }))
    }

    onChangeValue(value, name)
    values.current[name] = value
    onChangeValues({ ...values.current })
  }

  const handleOnChangeChildrenValues = (valuesChildren: ValuesComposite) => {
    values.current = {
      ...values.current,
      ...valuesChildren
    }
    onChangeValues(values.current)
  }

  const components = (
    <Space direction='vertical'>
      {childrenComponents.map((component, index) => {
        const visibility = !component.isHidden || !hidden[component.isHidden]

        if (!visibility) return null

        if (component instanceof CompositeComponent) {
          return (
            <Composite
              key={index}
              content={component}
              onChangeValue={handleOnChange}
              onChangeValues={handleOnChangeChildrenValues}
            />
          )
        }

        if (component instanceof CheckboxComponent) {
          return (
            <Checkbox
              key={index}
              name={component.name}
              onChange={value => handleOnChange(value, component.name)}
            />
          )
        }
        if (component instanceof InputComponent) {
          return (
            <Input
              key={index}
              title={component.title}
              name={component.name}
              placeholder={component.placeholder}
              onChange={value => handleOnChange(value, component.name)}
            />
          )
        }
        if (component instanceof RadioComponent) {
          return (
            <Radio
              key={index}
              name={component.name}
              title={component.title}
              options={component.options}
              onChange={value => handleOnChange(value, component.name)}
            />
          )
        }
        if (component instanceof TextComponent) {
          return <Text key={index} text={component.text} />
        }
      })}
    </Space>
  )

  return dropdown ? (
    <Collapse
      items={[
        { key: titleDropdown, label: titleDropdown, children: components }
      ]}
    />
  ) : (
    components
  )
}

export default Composite
