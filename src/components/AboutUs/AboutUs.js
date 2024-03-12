import { useTranslation } from "react-i18next"
import './AboutUs.css';

const AboutUs = () => {
    const [t] = useTranslation("global");
    return(
        <div>
            <div className="contenedor d-flex justify-content-center align-items-center pt-3">
                <img src={'/images/barra.webp'} alt="barra" width="273" height="464"/>
                <h2>{t("aboutUs.title")}</h2>
            </div>
            <div className="d-flex flex-column flex-md-row">
                <div className="col-12 col-md-5 p-5">
                    <img className="imgSobreMi" src={'/images/imagen2.webp'} alt="imagen2" width="400" height="400"/>
                </div>
                <div className="col-12 col-md-7 d-flex flex-column justify-content-center p-5 descripcion">
                    <p>{t("aboutUs.paragraph1")}</p>
                    <p>{t("aboutUs.paragraph2")}</p>
                    <p>{t("aboutUs.paragraph3")}</p>
                </div>    
            </div>
        </div>
    
        
    )
}

export default AboutUs