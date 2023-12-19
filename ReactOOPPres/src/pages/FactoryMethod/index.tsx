import React from 'react'
import createButton from './models/basic'

const FactoryMethod = () => {
  const [theme, setTheme] = React.useState<string>('1')

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setTheme(e.target.value)

  const UiButton = createButton(theme)

  return (
    <div>
      <div>
        <select onChange={onChange} value={theme}>
          <option value='1'>1 version</option>
          <option value='2'>2 version</option>
        </select>
      </div>

      <UiButton onClick={() => alert('click in App')} width='150px' />
    </div>
  )
}

export default FactoryMethod
