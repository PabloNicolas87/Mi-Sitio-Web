import { useTranslation } from "react-i18next"
import './AboutUs.css';

const AboutUs = () => {
    const [t] = useTranslation("global");
    return(
        <div className="img-fondo fondo">
            <div className="contenedor d-flex justify-content-center align-items-center">
                <img src={'/images/barra.webp'} alt="barra" width="273" height="464"/>
                <h2>{t("aboutUs.title")}</h2>
            </div>
            <div className="d-flex flex-column flex-md-row">
                <div className="col-12 col-md-5 p-5">
                    <img className="imgSobreMi" src={'/images/imagen2.webp'} alt="imagen2" width="400" height="400"/>
                </div>
                <div className="col-12 col-md-7 d-flex flex-column justify-content-center p-5 descripcion">
                    <h3 className="text-center">Pablo Nicolás Girone</h3>
                    <p>{t("aboutUs.paragraph1")}</p>
                    <br />
                    <br />
                    <p>{t("aboutUs.paragraph2")}</p>
                    <br />
                    <br />
                    <p>{t("aboutUs.paragraph3")}</p>
                </div>    
            </div>
        </div>
    
        
    )
}

export default AboutUs