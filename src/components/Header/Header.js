import { useTranslation } from "react-i18next"
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    const [t, i18n ] = useTranslation("global");

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <div className="">
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
                

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <FaBars />
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-md-end" id="navbarScroll">
                    <ul className="navbar-nav my-2 my-lg-0 px-2 mx-auto mx-md-0">
                        <li className="nav-item py-2 py-lg-0">
                            <NavLink to="/" className="nav-link px-2 about">{t("header.about-me")}</NavLink>
                        </li>
                        <li className="nav-item py-2 py-lg-0">
                            <NavLink to="/MySkills" className="nav-link px-2 skills">{t("header.my-skills")}</NavLink>
                        </li>
                        <li className="nav-item py-2 py-lg-0">
                            <NavLink to="/MyProjects" className="nav-link px-2 projects">{t("header.my-projects")}</NavLink>
                        </li>
                        <li className="nav-item py-2 py-lg-0">
                            <NavLink to="/Contact" className="nav-link px-2 contact">{t("header.contact")}</NavLink>
                        </li>
                    </ul>    
                </div>
            </div>
        </nav>
    )
}

export default Header