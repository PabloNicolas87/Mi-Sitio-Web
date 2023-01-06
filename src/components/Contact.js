import { useTranslation } from "react-i18next"
import BotonDescargar from "./BotonDescargar";

const Contact = () => {
    const [t] = useTranslation("global");
    return(
        <div className="img-fondo fondo d-flex flex-column justify-content-center">
            <div className="contenedor d-flex justify-content-center align-items-center">
                <img src={'/images/barra.png'} alt="barra" />
                <h2>{t("contact.title")}</h2>
            </div>
            <div className="py-5">
                <div className="redes">
                    <ul className="nav redes col-12 justify-content-center list-unstyled d-flex">
                        <li className="ms-3">
                            <a className="text-muted" href="https://api.whatsapp.com/send?phone=5547996251091&text=Hola%20Pablo!%20Quisiera%20contactarme%20contigo!" target="_blank" rel='noreferrer'>
                                <img src={'/images/whatsapp.png'} alt="Whatsapp" />
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="text-muted" href="https://www.linkedin.com/in/pablogirone" target="_blank" rel='noreferrer'>
                                <img src={'/images/linkedin.png'} alt="Linkedin" />
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="text-muted" href="https://www.instagram.com/pgirone/" target="_blank" rel='noreferrer'>
                                <img src={'/images/instagram.svg'} alt="Instagram" />
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="text-muted" href="https://www.facebook.com/pablo.girone.1" target="_blank" rel='noreferrer'>
                                <img src={'/images/facebook.svg'} alt="Facebook" />
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="text-muted" href="https://github.com/Pablo728" target="_blank" rel='noreferrer'>
                                <img src={'/images/github.svg'} alt="GitHub" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="contenedor d-flex justify-content-center align-items-center">
                <BotonDescargar></BotonDescargar>
            </div>
        </div>
    )
}

export default Contact