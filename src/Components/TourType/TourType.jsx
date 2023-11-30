// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../../assets/image/Accessible_Tourism.png'
import slide2 from '../../assets/image/Adventure_Tourism.jpg'
import slide3 from '../../assets/image/Agritourism.png'
import slide4 from '../../assets/image/Atomic_Tourism.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
const TourType = () => {
    return (
        <>
        <div className="mt-8 py-12">
            <h2 className="text-4xl font-bold text-center mt-8">TOUR TYPE</h2>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <Link to='/'>
          <SwiperSlide>
            <img src={slide1} alt="" className="z-2" />
             <h2 className=" font-bold text-black text-2xl">Accessible_Tourism</h2>
          </SwiperSlide></Link>
          <SwiperSlide>
          <img src={slide2} alt="" className="" />
          <h2 className=" font-bold text-black text-2xl">Adventure_Tourism</h2>
          </SwiperSlide>
          <SwiperSlide>
          <img src={slide3} alt="" className="" />
          <h2 className=" font-bold text-black text-2xl">Agritourism_Tourism</h2>
          </SwiperSlide>
          <SwiperSlide>
          <img src={slide4} alt="" className="" />
          <h2 className=" font-bold text-black text-2xl">Atomic_Tourism</h2>
          </SwiperSlide>
       
        </Swiper>
      </>
    );
};

export default TourType;