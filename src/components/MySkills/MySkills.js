import React from 'react';
import { useTranslation } from "react-i18next";
import SkillCard from '../SkillCard/SkillCard';
import Title from '../Title/Title';
import Image from '../Image/Image';

const MySkills = () => {
    const [t] = useTranslation("global");
    return (
        <div className="fondo fondogris" id="MySkills">
            <div className='container'>
                <Title titulo={t("mySkills.title")} />
                <div className="d-flex flex-column flex-md-row pt-5">
                    <SkillCard />
                    <div className="d-none d-md-flex justify-content-center w-100">
                        <Image srcImg={'/images/imagen2.webp'} nameImg={ 'Imagen2' } />
                    </div>
                </div>    
            </div>
        </div>
    );
}

export default MySkills;
