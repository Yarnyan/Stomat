import React from 'react'
import MapComponent from '../../components/map/MapComponent'
export default function MapModule() {
  return (
    <div className='Map'>
        <div className="Map__body" id='map'>
            <div className="Map__body-subtitle">
                <h1>Где нас найти?</h1>
            </div>
            <div className="Map__body-item">
                <MapComponent />
            </div>
        </div>
    </div>
  )
}
