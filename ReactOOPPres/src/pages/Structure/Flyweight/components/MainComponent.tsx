import React from 'react'

import { useModal } from '../context'

const MainComponent = () => {
  const { showModal } = useModal()

  const onClick = () => {
    showModal(<p>This is the modal content!</p>, {
      title: 'Custom Title'
    })
      .then(() => console.log('ok'))
      .catch(() => console.log('ne ok'))
  }

  const onClick2 = () => {
    showModal(<p onClick={onClick}>This is the modal 2 content!</p>, {
      title: 'Custom Title'
    })
      .then(onClick2)
      .catch(() => console.log('ne ok 2'))
  }

  return (
    <div>
      <h1>Welcome to the App!</h1>
      <button onClick={onClick}>Open Modal</button>
      <button onClick={onClick2}>Open 2 Modal</button>
    </div>
  )
}

export default MainComponent
