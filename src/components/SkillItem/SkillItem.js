import React from 'react';
import './SkillItem.css';

const SkillItem = ({ imageSrc, title }) => {
    return (
        <div className="card col-6 col-md-4 p-2 d-flex justify-content-center align-items-center">
            <img src={imageSrc} alt={title} />
            <div className="hover">
                <span className="titulo">{title}</span>
            </div>
        </div>
    );
}

export default SkillItem;