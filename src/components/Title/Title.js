import React from 'react';

const Title = ({ titulo }) => {
    return (
        <div className="contenedor d-flex justify-content-center align-items-center pt-3">
            <img src={'/images/barra.webp'} alt="barra" width="273" height="464"/>
            <h2>{titulo}</h2>
        </div>
    );
}

export default Title;

