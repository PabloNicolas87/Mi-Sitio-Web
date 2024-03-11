import React from 'react';
import SkillItem from '../SkillItem/SkillItem';

const SkillCard = ({ imageSrc, title }) => {
    return (
        <div className="col-6 col-sm-4 col-md-3 p-3">
            <SkillItem imageSrc={imageSrc} title={title} />
        </div>
    );
}

export default SkillCard;

