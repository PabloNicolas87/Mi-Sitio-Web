import { useTranslation } from "react-i18next"
import Title from '../Title/Title';
import Image from '../Image/Image';
import './AboutUs.css';

const AboutUs = () => {
    const [t] = useTranslation("global");
    return(
        <div>
            <Title titulo={t("aboutUs.title")} />
            <div className="d-flex flex-column flex-md-row">
            <Image srcImg={'/images/imagen1.webp'}/>
                <div className="col-12 col-md-7 d-flex flex-column justify-content-center p-5 descripcion">
                    <h3 className="text-center pb-3">Pablo Nicolás Girone</h3>
                    <p>{t("aboutUs.paragraph1")}</p>
                    <p>{t("aboutUs.paragraph2")}</p>
                    <p>{t("aboutUs.paragraph3")}</p>
                </div>    
            </div>
        </div>
    
        
    )
}

export default AboutUs