import { useTranslation } from "react-i18next"
import './MySkills.css';

const MySkills = () => {
    const [t] = useTranslation("global");
    return(
        <div>
            <div className="contenedor d-flex justify-content-center align-items-center pt-3">
                <img src={'/images/barra.webp'} alt="barra" />
                <h2>{t("mySkills.title")}</h2>
            </div>
            <div className="d-flex flex-column flex-md-row">
                <div className="col-12 col-md-7 p-5">
                    <div className="tarjetas d-flex row">
                        <div className="col-6 col-sm-4 col-md-3 p-3">
                            <div className="card d-flex justify-content-center align-items-center">
                                <img src={'/images/html.webp'} alt="Html" />
                                <div className="hover">
                                    <span className="titulo">HTML5</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3 p-3">
                            <div className="card d-flex justify-content-center align-items-center">
                                <img src={'/images/css.webp'} alt="Css" />
                                <div className="hover">
                                    <span className="titulo">CSS3</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3 p-3">
                            <div className="card d-flex justify-content-center align-items-center">
                                <img src={'/images/bootstrap.webp'} alt="Bootstrap" />
                                <div className="hover">
                                    <span className="titulo">Bootstrap</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3 p-3">
                            <div className="card d-flex justify-content-center align-items-center">
                                <img src={'/images/jquery.webp'} alt="JQuery" />
                                <div className="hover">
                                    <span className="titulo">Jquery</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3 p-3">
                            <div className="card d-flex justify-content-center align-items-center">
                                <img src={'/images/javascript.webp'} alt="Javascript" />
                                <div className="hover">
                                    <span className="titulo">Javascript</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3 p-3">
                            <div className="card d-flex justify-content-center align-items-center">
                                <img src={'/images/react.webp'} alt="React" />
                                <div className="hover">
                                    <span className="titulo">React JS</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3 p-3">
                            <div className="card d-flex justify-content-center align-items-center">
                                <img src={'/images/angular.webp'} alt="Angular" />
                                <div className="hover">
                                    <span className="titulo">Angular</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3 p-3">
                            <div className="card d-flex justify-content-center align-items-center">
                                <img src={'/images/firebase.webp'} alt="Firebase" />
                                <div className="hover">
                                    <span className="titulo">Firebase</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3 p-3">
                            <div className="card d-flex justify-content-center align-items-center">
                                <img src={'/images/github.webp'} alt="GitHub" />
                                <div className="hover">
                                    <span className="titulo">GitHub</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3 p-3">
                            <div className="card d-flex justify-content-center align-items-center">
                                <img src={'/images/webflow.webp'} alt="Webflow" />
                                <div className="hover">
                                    <span className="titulo">Webflow</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3 p-3">
                            <div className="card d-flex justify-content-center align-items-center">
                                <img src={'/images/tagmanager.webp'} alt="GoogleTagManager" />
                                <div className="hover">
                                    <span className="titulo">Google Tag Manager</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3 p-3">
                            <div className="card d-flex justify-content-center align-items-center">
                                <img src={'/images/googleads.webp'} alt="GoogleAds" />
                                <div className="hover">
                                    <span className="titulo">Google Ads</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3 p-3">
                            <div className="card d-flex justify-content-center align-items-center">
                                <img src={'/images/googleanalytics.webp'} alt="GoogleAnalytics" />
                                <div className="hover">
                                    <span className="titulo">Google Analytics</span>
                                </div>
                            </div>
                        </div>                       
                    </div>
                </div>
                <div className="col-12 col-md-5 d-flex flex-column justify-content-center p-5">
                    <img src={'/images/imagen3.webp'} alt="Imágen 3" width="100%"/>
                </div>    
            </div>
        </div>
    )
}

export default MySkills