import './Swiper.css';
import { useTranslation } from "react-i18next";
import MyProjectsItem from '../MyProjectsItem/MyProjectsItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Autoplay } from 'swiper';

SwiperCore.use([Autoplay]);

const SwiperJS = () => {
    const [t] = useTranslation("global");

    const projects = [
        {
            title: t("myProjects.project1"),
            imageSrc: "/images/landingpage.webp",
            deploymentLink: "https://landing-page-xi-tan.vercel.app/",
            skills: [
                { imageSrc: "/images/webflow.webp", title: "Webflow" }
            ]
        },
        {
            title: t("myProjects.project2"),
            imageSrc: "/images/calculadora.webp",
            deploymentLink: "https://js-curso-xi.vercel.app/",
            skills: [
                { imageSrc: "/images/html.webp", title: "Html" },
                { imageSrc: "/images/css.webp", title: "Css" },
                { imageSrc: "/images/javascript.webp", title: "Javascript" }
            ]
        },
        {
            title: t("myProjects.project3"),
            imageSrc: "/images/Ecommerce.webp",
            deploymentLink: "https://react-curso-alpha.vercel.app/",
            skills: [
                { imageSrc: "/images/react.webp", title: "React" },
                { imageSrc: "/images/firebase.webp", title: "Firebase" },
                { imageSrc: "/images/bootstrap.webp", title: "Bootstrap" }
            ]
        },
        {
            title: t("myProjects.project4"),
            imageSrc: "/images/TodoListApp.webp",
            deploymentLink: "https://to-do-list-app-psi.vercel.app/",
            skills: [
                { imageSrc: "/images/angular.webp", title: "Angular" }
            ]
        }
    ];

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
            {projects.map((project, index) => (
                <SwiperSlide key={index} className='custom-swiper-slide d-flex flex-column justify-content-between p-5'>
                    <h3>{project.title}</h3>
                    <img src={project.imageSrc} alt={project.title} />
                    <MyProjectsItem
                        title={project.title}
                        deploymentLink={project.deploymentLink}
                        skills={project.skills}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SwiperJS;
