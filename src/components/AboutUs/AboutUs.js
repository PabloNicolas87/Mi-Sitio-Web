import { useTranslation } from "react-i18next"
import Title from '../Title/Title';
import Image from '../Image/Image';

const AboutUs = () => {
    const [t] = useTranslation("global");
    return(
        <div className="fondo fondoAboutUs" id="AboutUs">
            <div className="container">
                <Title titulo={t("aboutUs.title")} />
                <div className="d-flex flex-column flex-md-row py-5">
                    <Image srcImg={'/images/imagen1.webp'} nameImg={ 'Imagen1' } />
                    <div className="col-12 col-md-7 d-flex flex-column justify-content-center">
                        <h3 className="text-center pb-3">Pablo Nicolás Girone</h3>
                        <p>{t("aboutUs.paragraph1")}</p>
                        <p>{t("aboutUs.paragraph2")}</p>
                        <p>{t("aboutUs.paragraph3")}</p>
                    </div>    
                </div>
            </div>
        </div>        
    )
}

export default AboutUs