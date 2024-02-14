import React from 'react'

export default function ServicesComponent({image}) {
    return (
        <div className='Services__items-item'>
            <div className='Services__item-image'>
                <img src={image} alt="" />
            </div>
        </div>
    )
}
