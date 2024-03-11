import 'swiper/css';
import { useTranslation } from "react-i18next"
import MyProjectsLanding from "../MyProjectsLanding/MyProjectsLanding";
import MyProjectsCalculator from '../MyProjectsCalculator/MyProjectsCalculator';
import MyProjectsEcommerce from '../MyProjectsEcommerce/MyProjectsEcommerce';
import MyProjectsTodoListApp from '../MyProjectsTodoListApp/MyProjectsTodoListApp';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import 'swiper/swiper-bundle.css';
import SwiperCore, { Autoplay } from 'swiper';


const SwiperJS = () => {
    SwiperCore.use([Autoplay])
    const [t] = useTranslation("global");
    return (
        <Swiper 
        autoplay={{ delay: 3000 }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        breakpoints={{
            // when window width is >= 640px
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
        }}
        spaceBetween={50}
        slidesPerView={1}
        slidesPerGroup= {1}
        navigation
        pagination={{ clickable: true }}
        loop = {true}
        >
        <SwiperSlide className='d-flex flex-column justify-content-between p-5'>
            <h3>{t("myProjects.project1")}</h3>
            <img src={'/images/nubizate.webp'} alt="Landing-Page" />
            <MyProjectsLanding />
        </SwiperSlide>
        <SwiperSlide className='d-flex flex-column justify-content-between p-5'>
            <h3>{t("myProjects.project2")}</h3>
            <img src={'/images/calculadora.webp'} alt="Calculadora" />
            <MyProjectsCalculator />
        </SwiperSlide>
        <SwiperSlide className='d-flex flex-column justify-content-between p-5'>
            <h3>{t("myProjects.project3")}</h3>
            <img src={'/images/Ecommerce.webp'} alt="Ecommerce" />
            <MyProjectsEcommerce />
        </SwiperSlide>
        <SwiperSlide className='d-flex flex-column justify-content-between p-5'>
            <h3>{t("myProjects.project4")}</h3>
            <img src={'/images/TodoListApp.webp'} alt="To Do List App" />
            <MyProjectsTodoListApp />
        </SwiperSlide>
        </Swiper>
    );
};

export default SwiperJS
