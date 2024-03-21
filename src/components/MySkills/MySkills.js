import React from 'react';
import { useTranslation } from "react-i18next";
import SkillCard from '../SkillCard/SkillCard';
import Title from '../Title/Title';
import Image from '../Image/Image';

const MySkills = () => {
    const [t] = useTranslation("global");
    return (
        <div className="fondo" id="MySkills">
            <Title titulo={t("mySkills.title")} />
            <div className="d-flex flex-column flex-md-row p-5">
                <SkillCard />
                <Image srcImg={'/images/imagen2.webp'}/>
            </div>
        </div>
    );
}

export default MySkills;
