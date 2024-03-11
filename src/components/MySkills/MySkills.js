import React from 'react';
import { useTranslation } from "react-i18next";
import SkillCard from '../SkillCard/SkillCard';

const MySkills = () => {
    const [t] = useTranslation("global");
    return (
        <div>
            <div className="contenedor d-flex justify-content-center align-items-center pt-3">
                <img src={'/images/barra.webp'} alt="barra" />
                <h2>{t("mySkills.title")}</h2>
            </div>
            <div className="d-flex flex-column flex-md-row">
                <div className="col-12 col-md-7 p-5">
                    <div className="tarjetas d-flex row">
                        <SkillCard imageSrc="/images/html.webp" title="HTML5" />
                        <SkillCard imageSrc="/images/css.webp" title="CSS3" />
                        <SkillCard imageSrc="/images/bootstrap.webp" title="Bootstrap" />
                        <SkillCard imageSrc="/images/jquery.webp" title="JQuery" />
                        <SkillCard imageSrc="/images/javascript.webp" title="Javascript" />
                        <SkillCard imageSrc="/images/react.webp" title="React JS" />
                        <SkillCard imageSrc="/images/angular.webp" title="Angular" />
                        <SkillCard imageSrc="/images/firebase.webp" title="Firebase" />
                        <SkillCard imageSrc="/images/github.webp" title="GitHub" />
                        <SkillCard imageSrc="/images/webflow.webp" title="Webflow" />
                        <SkillCard imageSrc="/images/tagmanager.webp" title="Google Tag Manager" />
                        <SkillCard imageSrc="/images/googleads.webp" title="Google Ads" />
                        <SkillCard imageSrc="/images/googleanalytics.webp" title="Google Analytics" />
                    </div>
                </div>
                <div className="col-12 col-md-5 d-flex flex-column justify-content-center p-5">
                    <img src={'/images/imagen3.webp'} alt="Imágen 3" width="100%" />
                </div>
            </div>
        </div>
    );
}

export default MySkills;
