import React, { useEffect, useRef } from 'react'

const YandexMapFacade = ({ initialCoordinates, zoomLevel }) => {
  const mapContainerRef = useRef(null)
  const mapRef = useRef(null)

  useEffect(() => {
    const loadYandexMapsApi = () => {
      const script = document.createElement('script')
      script.src = `https://api-maps.yandex.ru/2.1/?lang=ru_RU`
      script.async = true
      document.body.appendChild(script)
      script.onload = () => {
        window.ymaps.ready(initializeMap)
      }
    }

    // Функция для инициализации карты
    const initializeMap = () => {
      mapRef.current = new window.ymaps.Map(mapContainerRef.current, {
        center: initialCoordinates,
        zoom: zoomLevel
      })
    }

    if (typeof window.ymaps === 'undefined') {
      loadYandexMapsApi()
    } else {
      window.ymaps.ready(initializeMap)
    }

    return () => {
      mapRef.current.destroy()
    }
  }, [initialCoordinates, zoomLevel])

  return (
    <div ref={mapContainerRef} style={{ height: '400px', width: '100%' }} />
  )
}

export default YandexMapFacade
