import YandexMapFacade from './components/YandexMapFacade'

const Facade = () => {
  return (
    <YandexMapFacade
      initialCoordinates={[55.796127, 49.106414]}
      zoomLevel={16}
    />
  )
}

export default Facade
