import React from 'react';
import SkillItem from '../SkillItem/SkillItem';

const SkillCard = ({ imageSrc, title }) => {
    // Array de objetos con los datos de las habilidades
    const skills = [
        { imageSrc: "/images/html.webp", title: "HTML5" },
        { imageSrc: "/images/css.webp", title: "CSS3" },
        { imageSrc: "/images/bootstrap.webp", title: "Bootstrap" },
        { imageSrc: "/images/jquery.webp", title: "JQuery" },
        { imageSrc: "/images/javascript.webp", title: "Javascript" },
        { imageSrc: "/images/react.webp", title: "React JS" },
        { imageSrc: "/images/angular.webp", title: "Angular" },
        { imageSrc: "/images/firebase.webp", title: "Firebase" },
        { imageSrc: "/images/github.webp", title: "GitHub" },
        { imageSrc: "/images/webflow.webp", title: "Webflow" },
        { imageSrc: "/images/wordpress.webp", title: "Wordpress" },
        { imageSrc: "/images/tagmanager.webp", title: "Google Tag Manager" },
        { imageSrc: "/images/googleads.webp", title: "Google Ads" },
        { imageSrc: "/images/googleanalytics.webp", title: "Google Analytics" },
        
    ];
    
    return (
        <div className="col-12 col-md-7 d-flex flex-column justify-content-center">
            <div className="tarjetas d-flex row p-2">
            {skills.map((skill, index) => (
                <SkillItem key={index} imageSrc={skill.imageSrc} title={skill.title} />
            ))}
        </div>
        </div>
    );
}

export default SkillCard;

