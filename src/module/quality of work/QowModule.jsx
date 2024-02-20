import React, { useEffect, useState } from 'react';
import QowComponent from '../../components/quality of work/QowComponent';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { sliderQow } from '../../data/data';
import { sliderQowMobile } from '../../data/data'
export default function QowModule() {
  const [sliderItems, setSliderItems] = useState([]);
  const [slidesPerView, setSlidesPerView] = useState(() => getInitialSlidesPerView());

  function getInitialSlidesPerView() {
    return window.innerWidth <= 768 ? 1 : 3;
  }

  useEffect(() => {
    setSliderItems(window.innerWidth <= 768 ? sliderQowMobile : sliderQow);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    setSlidesPerView(getInitialSlidesPerView());
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <div className="Qow">
      <div className="Qow__body">
        <Swiper
          loop={true}
          spaceBetween={50}
          centeredSlides={true}
          slidesPerView={1}
          modules={[Autoplay, Navigation, Pagination]}
          navigation={!isMobile}
          pagination={isMobile}
          // autoplay={{
          //   delay: 6000,
          //   disableOnInteraction: false,
          // }}
        >
          {sliderItems.map((item, index) => (
            <SwiperSlide key={index}>
              <QowComponent id={item.id} subtitle={item.subtitle} title={item.title} image={item.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
