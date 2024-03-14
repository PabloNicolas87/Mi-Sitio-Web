import { useTranslation } from "react-i18next";
import BotonDescargar from "../BotonDescargar/BotonDescargar";
import SocialIconList from '../SocialIconList/SocialIconList';
import Title from '../Title/Title';

const Contact = () => {
    const [t] = useTranslation("global");
    return(
        <div className="d-flex flex-column justify-content-center">
            <Title titulo={t("contact.title")} />
            <SocialIconList />
            <BotonDescargar />
        </div>
    )
}

export default Contact;
