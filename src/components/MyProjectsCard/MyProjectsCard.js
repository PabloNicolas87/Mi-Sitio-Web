import React from 'react';

const MyProjectsCard = ({ imageSrc, title }) => {
    return (
        <div>
            <h3>{title}</h3>
            <img src={imageSrc} alt={title} />
        </div>
    );
}

export default MyProjectsCard;