import React from 'react'

export default function EmployeesComponent({id, image, subtitle, title}) {
  return (
    <div className='Employees__items-item'>
      <div className='Employees__item-image'>
        <img src={image} alt="" />
      </div>
      <div className='Employees__item-subtitle'>
        <h2>{subtitle}</h2>
      </div>
      <div className='Employees__item-title'>
        <p>{title}</p>
      </div>
    </div>
  )
}
