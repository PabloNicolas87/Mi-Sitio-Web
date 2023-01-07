import { useTranslation } from "react-i18next"
import SwiperJS from "./Swiper";


const MyProjects = () => {
    const [t] = useTranslation("global");
    return(
        <div className="img-fondo fondo">
            <div className="contenedor d-flex justify-content-center align-items-center">
                <img src={'/images/barra.png'} alt="barra" />
                <h2>{t("myProjects.title")}</h2>
            </div>
            <div className="container pt-4">
                <SwiperJS />  
            </div>
            
        </div>  
    )
}

export default MyProjects