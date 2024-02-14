import React, { useEffect, useState } from 'react'
import TestimonialsComponent from '../../components/testimonials/TestimonialsComponent'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Testimonials } from '../../data/data'
export default function TestimonialsModule() {
    const [testimonials, setTestimonials] = useState([])
    const [slidesPerView, setSlidesPerView] = useState(window.innerWidth < 768 ? 1 : 3);

    const handleResize = () => {
      setSlidesPerView(window.innerWidth < 768 ? 1 : 3);
    };
    useEffect(() => {
        setTestimonials(Testimonials)
        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className='Testimonials'>
            <div className="Testimonials__body">
                <div className="Testimonials__body-subtitle">
                    <h1>Отзывы</h1>
                </div>
                <div className="Testimonials__body-items">
                    <Swiper
                        loop={true}
                        spaceBetween={50}
                        centeredSlides={true}
                        slidesPerView={slidesPerView}
                        modules={[Autoplay, Pagination]}
                        pagination={true}
                        autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                        }}
                    >
                        {testimonials.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <TestimonialsComponent id={item.id} image={item.img} name={item.name} rating={item.rating} title={item.title} key={index} />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
