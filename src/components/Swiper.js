// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { useTranslation } from "react-i18next"

const SwiperJS = () => {
    const [t] = useTranslation("global");
    return (
        <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
        <SwiperSlide className='d-flex flex-column justify-content-between p-5'>
            <h3>{t("myProjects.project1")}</h3>
            <img src={'/images/nubizate.png'} alt="Nubizate" />
            <div className="btn-primary">
                <a className="p-2" href="https://nubizate.com/" target="_blank">{t("myProjects.view")}</a>
            </div>    
        </SwiperSlide>
        <SwiperSlide className='d-flex flex-column justify-content-between p-5'>
            <h3>{t("myProjects.project2")}</h3>
            <img src={'/images/calculadora.png'} alt="Calculadora" />
            <div className="btn-primary">
                <a className="p-2" href="https://js-curso-xi.vercel.app/" target="_blank">{t("myProjects.view")}</a>
            </div>
        </SwiperSlide>
        <SwiperSlide className='d-flex flex-column justify-content-between p-5'>
            <h3>{t("myProjects.project3")}</h3>
            <img src={'/images/Ecommerce.png'} alt="Ecommerce" />
            <div className="btn-primary">
                <a className="p-2" href="https://react-curso-alpha.vercel.app/" target="_blank">{t("myProjects.view")}</a>
            </div>
        </SwiperSlide>
        </Swiper>
    );
};

export default SwiperJS
