import React from 'react'
export default function ({id, image, subtitle, title}) {
    return (
        <div className='Qow__body-item'>
            <div className='Qow__item-text'>
                <div className="Qow__text-subtitle">{subtitle}</div>
                <div className="Qow__text-title">
                    {title}
                </div>
            </div>
            <div className='Qow__item-svg'>
                <img src={image} alt="" />
            </div>
        </div>
    )
}
