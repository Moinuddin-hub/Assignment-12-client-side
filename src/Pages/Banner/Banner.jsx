
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import slide1 from '../../assets/image/banner1.jpg'
import slide2 from '../../assets/image/banner2.jpg'
import slide3 from '../../assets/image/travel-3.jpg'
import slide4 from '../../assets/image/travel-4.jpg'

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


const Banner = () => {
 
    return (
        <>
        <Swiper 
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper opacity-4 z-1 mt-24"
        >
          <SwiperSlide><img src={slide1} alt="" className="" /></SwiperSlide>
          <SwiperSlide> <img src={slide2} alt="" className="" /></SwiperSlide>
          <SwiperSlide><img src={slide3} alt="" className="w-full" /></SwiperSlide>
          <SwiperSlide><img src={slide4} alt="" className='w-full' />     </SwiperSlide>
     
        
        </Swiper>
      </>
    );
};

export default Banner;