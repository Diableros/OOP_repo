import { ModalProvider } from './context'
import MainComponent from './components/MainComponent'

const Flyweight = () => {
  return (
    <ModalProvider>
      <MainComponent />
    </ModalProvider>
  )
}

export default Flyweight
