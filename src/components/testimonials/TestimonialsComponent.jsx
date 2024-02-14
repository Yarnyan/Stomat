import React from 'react'
import AvatarUi from '../../ui/AvatarUi'
import { Star } from '@mui/icons-material'
export default function TestimonialsComponent({id, image, title, rating, name}) {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= rating; i++) {
      stars.push(<Star key={i} />);
    }
    return stars;
  };

  return (
    <div className='Testimonials__items-item'>
        <div className="Testimonials__item-header">
          <div>
            <AvatarUi img={image}/>
          </div>
          <div className="Header__subtitle">
            <h1>{name}</h1>
          </div>
        </div>
        <div className="Testimonials__item-rating">
          {renderStars()}
        </div>
        <div className="Testimonials__item-title">
          <h2>{title}</h2>
        </div>
    </div>
  )
}
