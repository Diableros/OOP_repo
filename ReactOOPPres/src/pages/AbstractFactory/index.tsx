import React from 'react'
import createUiKit from './models/basic'

const AbstractFactory = () => {
  const [theme, setTheme] = React.useState<string>('1')

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setTheme(e.target.value)

  const UiKit = createUiKit(theme)

  const UiButton = UiKit.createButton().render()
  const UiCheckbox = UiKit.createCheckbox().render()

  return (
    <>
      <div>
        <select onChange={onChange} value={theme}>
          <option value='1'>1 version</option>
          <option value='2'>2 version</option>
        </select>
      </div>

      <UiButton onClick={() => alert('click in App')} width='150px' />
      <UiCheckbox onChange={() => alert('click in App')} width='150px' />
    </>
  )
}
export default AbstractFactory
