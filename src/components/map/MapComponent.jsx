import React from 'react'
import Location from '../../ui/Location'
export default function MapComponent() {
  return (
    <div className='Map__body-map'>
        <div className='map__address'>
            <Location />
            <p>ул. Ленина, 84а, Билимбай, Свердловская область</p>
        </div>
        <div className='map__item'>
            <img src="/source/image/map.png" alt="" />
        </div>
    </div>
  )
}
