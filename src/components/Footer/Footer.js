import { useTranslation } from "react-i18next"
import './Footer.css';

const Footer = () => {
    const [t] = useTranslation("global");

    return(
        <div>
            <footer className="footer">
                <div className="container">
                    <footer className="d-flex flex-wrap flex-column flex-md-row justify-content-between align-items-center py-3">
                        <div className="col-md-4 d-flex align-items-center">
                            <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                                <img src={'/images/logo.webp'} alt="Imágen Logo" />
                            </a>
                        </div>
                        <span className="col-md-4 mb-3 mb-md-0 text-muted text-center">{t("footer.rights")}</span>
                        
                    </footer>
                </div>
            </footer>    
        </div>
    )
}

export default Footer