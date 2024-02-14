import React from 'react'
import HeaderModule from '../module/header/HeaderModule'
import QowModule from '../module/quality of work/QowModule'
import EmployeesModule from '../module/employees/EmployeesModule'
import ServicesModule from '../module/services/ServicesModule'
import TestimonialsModule from '../module/testimonials/TestimonialsModule'
import CallModule from '../module/call/CallModule'
import MapModule from '../module/map/MapModule'
import FooterModule from '../module/footer/FooterModule'
export default function () {
  return (
    <div className='Body__items'>
        <HeaderModule />
        <QowModule />
        <EmployeesModule />
        <ServicesModule />
        <TestimonialsModule />
        <CallModule />
        <MapModule />
        <FooterModule />
    </div>
  )
}
