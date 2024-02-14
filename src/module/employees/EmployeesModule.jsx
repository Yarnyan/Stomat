import React, {useEffect, useState} from 'react'
import EmployeesComponent from '../../components/employees/EmployeesComponent'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { sliderEmployees } from '../../data/data'
export default function EmployeesModule() {
  const [employees, setEmployees] = useState([])
  const [slidesPerView, setSlidesPerView] = useState(window.innerWidth < 768 ? 1 : 3);

  const handleResize = () => {
    setSlidesPerView(window.innerWidth < 768 ? 1 : 3);
  };

  useEffect(() => {
    setEmployees(sliderEmployees);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className='Employees'>
      <div className="Employees__body">
        <div className="Employees__body-subtitle">
          <h1>Наши специалисты</h1>
        </div>
        <div className="Employees__body-items">
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
          {employees.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <EmployeesComponent id={item.id} subtitle={item.subtitle} title={item.title} image={item.image}/>
              </SwiperSlide>
            )
          })}
        </Swiper>
        </div>
      </div>
    </div>
  )
}
