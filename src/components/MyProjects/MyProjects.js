import { useTranslation } from "react-i18next"
import SwiperJS from "../Swiper/Swiper";
import './MyProjects.css';


const MyProjects = () => {
    const [t] = useTranslation("global");
    return(
        <div>
            <div className="contenedor d-flex justify-content-center align-items-center pt-3">
                <img src={'/images/barra.webp'} alt="barra" />
                <h2>{t("myProjects.title")}</h2>
            </div>
            <div className="container pt-4">
                <SwiperJS />  
            </div>
        </div>  
    )
}

export default MyProjects