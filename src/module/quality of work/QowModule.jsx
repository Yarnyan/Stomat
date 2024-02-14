import React, {useEffect, useState} from 'react'
import QowComponent from '../../components/quality of work/QowComponent'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { sliderQow } from '../../data/data';
export default function QowModule() {
  const [sliderItems, setSliderItems] = useState([])
  const [slidesPerView, setSlidesPerView] = useState(() => getInitialSlidesPerView());

  function getInitialSlidesPerView() {
    return window.innerWidth <= 768 ? 1 : 3;
  }

  useEffect(() => {
    setSliderItems(sliderQow);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    setSlidesPerView(getInitialSlidesPerView());
  };

  return (
    <div className='Qow'>
      <div className="Qow__body">
        <Swiper
          loop={true}
          spaceBetween={50}
          centeredSlides={true}
          slidesPerView={1}
          modules={[Autoplay, Navigation]}
          navigation={true}
          // autoplay={{
          //   delay: 6000,
          //   disableOnInteraction: false,
          // }}
        >
          {sliderItems.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <QowComponent id={item.id} subtitle={item.subtitle} title={item.title} image={item.image}/>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}
