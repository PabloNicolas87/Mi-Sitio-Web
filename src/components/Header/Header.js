import { useTranslation } from "react-i18next"
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [t, i18n ] = useTranslation("global");

    return (
        <nav class="navbar">
        <div class="container-fluid">
            <div>
                <Link to='/' className="navbar-brand m-0">
                    <img src={'/images/logo.webp'} alt="Imágen Logo" width="180" height="71"/>
                </Link>
                <div className="btn-group">
                    <button type="button" className="btn btn-secondary btn-idioma dropdown-toggle m-0" data-bs-toggle="dropdown" aria-expanded="false">
                        {t("header.select-language")}
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end lista-idiomas">
                        <li>
                            <button className="dropdown-item d-flex justify-content-between align-items-center" onClick={() => i18n.changeLanguage("es")}>{t("header.spanish")}<img src={'/images/arg.webp'} alt={t("header.spanish")} /></button>
                        </li>
                        <li>
                            <button className="dropdown-item d-flex justify-content-between align-items-center" onClick={() => i18n.changeLanguage("por")}>{t("header.portuguese")}<img src={'/images/bra.webp'} alt={t("header.portuguese")} /></button>
                        </li>
                        <li>
                            <button className="dropdown-item d-flex justify-content-between align-items-center" onClick={() => i18n.changeLanguage("en")}>{t("header.english")}<img src={'/images/eeuu.webp'} alt={t("header.english")} /></button>
                        </li>
                    </ul>
                </div>    
            </div>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
            <Link id="offcanvasNavbarLabel" to='/' className="navbar-brand m-0">
                <img src={'/images/logo.webp'} alt="Imágen Logo" width="180" height="71"/>
            </Link>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li data-bs-dismiss="offcanvas" aria-label="Close" className="nav-item py-2 py-lg-0">
                    <NavLink to="/" className="nav-link px-2 about">{t("header.about-me")}</NavLink>
                </li>
                <li data-bs-dismiss="offcanvas" aria-label="Close" className="nav-item py-2 py-lg-0">
                    <NavLink to="/MySkills" className="nav-link px-2 skills">{t("header.my-skills")}</NavLink>
                </li>
                <li data-bs-dismiss="offcanvas" aria-label="Close" className="nav-item py-2 py-lg-0">
                    <NavLink to="/MyProjects" className="nav-link px-2 projects">{t("header.my-projects")}</NavLink>
                </li>
                <li data-bs-dismiss="offcanvas" aria-label="Close" className="nav-item py-2 py-lg-0">
                    <NavLink to="/Contact" className="nav-link px-2 contact">{t("header.contact")}</NavLink>
                </li>
            </ul>
            
            </div>
        </div>
        </div>
        </nav>

    )
}

export default Header