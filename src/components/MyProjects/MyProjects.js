import { useTranslation } from "react-i18next"
import SwiperJS from "../Swiper/Swiper";
import Title from '../Title/Title';
import './MyProjects.css';


const MyProjects = () => {
    const [t] = useTranslation("global");
    return(
        <div>
            <Title titulo={t("myProjects.title")} />
            <div className="container pt-4">
                <SwiperJS />  
            </div>
        </div>  
    )
}

export default MyProjects