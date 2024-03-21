import React from 'react';
import { useTranslation } from "react-i18next";
import Logo from '../Logo/Logo.js';
import NavItems from '../NavItem/NavItem.js';
import './Header.css';

const Header = () => {
    const [t, i18n ] = useTranslation("global");

    return (
        <nav className="navbar fixed-top">
            <div className="container-fluid">
                <Logo />
                <div>
                    <div className="btn-group">
                        <button type="button" className="btn btn-secondary btn-idioma dropdown-toggle m-0" data-bs-toggle="dropdown" aria-expanded="false">
                            {t("header.select-language")}
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end lista-idiomas">
                            <li>
                                <button className="dropdown-item d-flex justify-content-between align-items-center" onClick={() => i18n.changeLanguage("es")}>{t("header.spanish")}<img src={'/images/arg.webp'} alt={t("header.spanish")} width="30px" height="30px" /></button>
                            </li>
                            <li>
                                <button className="dropdown-item d-flex justify-content-between align-items-center" onClick={() => i18n.changeLanguage("por")}>{t("header.portuguese")}<img src={'/images/bra.webp'} alt={t("header.portuguese")} width="30px" height="30px" /></button>
                            </li>
                            <li>
                                <button className="dropdown-item d-flex justify-content-between align-items-center" onClick={() => i18n.changeLanguage("en")}>{t("header.english")}<img src={'/images/eeuu.webp'} alt={t("header.english")} width="30px" height="30px" /></button>
                            </li>
                        </ul>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <Logo />
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <NavItems />
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;