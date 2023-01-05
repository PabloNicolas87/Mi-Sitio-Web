import { useTranslation } from "react-i18next"
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => {
    const [t, i18n ] = useTranslation("global");

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <Link to='/' className="navbar-brand" href="#">
                    <img src={'/images/logo.png'} alt="Imágen Logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa-solid fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-md-end" id="navbarScroll">
                    <ul className="navbar-nav my-2 my-lg-0 px-2">
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
                    <div className="btn-group px-2">
                        <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            {t("header.select-language")}
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><button className="dropdown-item" onClick={() => i18n.changeLanguage("en")}>EN</button></li>
                            <li><button className="dropdown-item" onClick={() => i18n.changeLanguage("es")}>ES</button></li>
                            <li><button className="dropdown-item" onClick={() => i18n.changeLanguage("por")}>POR</button></li>
                        </ul>
                    </div>     
                </div>
            </div>
        </nav>
    )
}

export default Header