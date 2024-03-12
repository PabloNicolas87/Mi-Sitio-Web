import './Swiper.css';
import { useTranslation } from "react-i18next";
import MyProjectsItem from '../MyProjectsItem/MyProjectsItem';

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
        <SwiperSlide className='custom-swiper-slide d-flex flex-column justify-content-between p-5'>
            <h3>{t("myProjects.project1")}</h3>
            <img src={'/images/landingpage.webp'} alt={t("myProjects.project1")} />
            <MyProjectsItem
                title={t("myProjects.project1")}
                deploymentLink="https://landing-page-xi-tan.vercel.app/"
                skills={[
                    { imageSrc: "/images/webflow.webp", title: "Webflow" },
                ]}
            />
        </SwiperSlide>
        <SwiperSlide className='custom-swiper-slide d-flex flex-column justify-content-between p-5'>
            <h3>{t("myProjects.project2")}</h3>
            <img src={'/images/calculadora.webp'} alt={t("myProjects.project2")} />
            <MyProjectsItem
                title={t("myProjects.project2")}
                deploymentLink="ttps://js-curso-xi.vercel.app/"
                skills={[
                    { imageSrc: "/images/html.webp", title: "Html" },
                    { imageSrc: "/images/css.webp", title: "Css" },
                    { imageSrc: "/images/javascript.webp", title: "Javascript" },
                ]}
            />
        </SwiperSlide>
        <SwiperSlide className='custom-swiper-slide d-flex flex-column justify-content-between p-5'>
            <h3>{t("myProjects.project3")}</h3>
            <img src={'/images/Ecommerce.webp'} alt={t("myProjects.project3")} />
            <MyProjectsItem
                title={t("myProjects.project3")}
                deploymentLink="https://react-curso-alpha.vercel.app/"
                skills={[
                    { imageSrc: "/images/react.webp", title:"React" },
                    { imageSrc: "/images/firebase.webp", title: "Firebase" },
                    { imageSrc: "/images/bootstrap.webp", title: "Bootstrap" },
                ]}
            />
        </SwiperSlide>
        <SwiperSlide className='custom-swiper-slide d-flex flex-column justify-content-between p-5'>
            <h3>{t("myProjects.project4")}</h3>
            <img src={'/images/TodoListApp.webp'} alt={t("myProjects.project4")} />
            <MyProjectsItem
                title={t("myProjects.project4")}
                deploymentLink="https://to-do-list-app-psi.vercel.app/"
                skills={[
                    { imageSrc: "/images/angular.webp", title: "Angular" },
                ]}
            />
        </SwiperSlide>
        </Swiper>
    );
};

export default SwiperJS
