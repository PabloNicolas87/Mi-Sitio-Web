import { useTranslation } from "react-i18next"

const Footer = () => {
    const [t] = useTranslation("global");

    return(
        <div>
            <footer className="footer">
                <div className="container">
                    <footer className="d-flex flex-wrap flex-column flex-md-row justify-content-between align-items-center py-3">
                        <div className="col-md-4 d-flex align-items-center">
                            <a href="/GitHub/WebPage/index.php" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                                <img src={'/images/logo.png'} alt="Imágen Logo" />
                            </a>
                        </div>
                        <span className="col-md-4 mb-3 mb-md-0 text-muted text-center">{t("footer.rights")}</span>
                        <ul className="nav redes col-md-4 justify-content-end list-unstyled d-flex">
                            <li className="ms-3">
                                <a className="text-muted" href="https://www.linkedin.com/in/pablogirone" target="_blank" rel='noreferrer'><img src={'/images/linkedin.png'} alt="Linkedin" /></a>
                            </li>
                            <li className="ms-3">
                                <a className="text-muted" href="https://www.instagram.com/pgirone/" target="_blank" rel='noreferrer'><img src={'/images/instagram.svg'} alt="Instagram" /></a>
                            </li>
                            <li className="ms-3">
                                <a className="text-muted" href="https://www.facebook.com/pablo.girone.1" target="_blank" rel='noreferrer'><img src={'/images/facebook.svg'} alt="Facebook" /></a>
                            </li>
                            <li className="ms-3">
                                <a className="text-muted" href="https://github.com/Pablo728" target="_blank" rel='noreferrer'><img src={'/images/github.svg'} alt="GitHub" /></a>
                            </li>
                        </ul>
                    </footer>
                </div>
            </footer>    
        </div>
    )
}

export default Footer