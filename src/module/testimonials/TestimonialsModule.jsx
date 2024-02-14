import React, {useEffect, useState} from 'react'
import TestimonialsComponent from '../../components/testimonials/TestimonialsComponent'
import { Testimonials } from '../../data/data'
export default function TestimonialsModule() {
    const [testimonials, setTestimonials] = useState([])
    useEffect(() => {
        setTestimonials(Testimonials)
      }, []);
  return (
    <div className='Testimonials'>
        <div className="Testimonials__body">
            <div className="Testimonials__body-subtitle">
                <h1>Отзывы</h1>
            </div>
            <div className="Testimonials__body-items">
                {testimonials.map((item, index) => {
                    return (
                        <TestimonialsComponent id={item.id} image={item.img} name={item.name} rating={item.rating} title={item.title} key={index}/>
                    )
                })}
            </div>
        </div>
    </div>
  )
}
