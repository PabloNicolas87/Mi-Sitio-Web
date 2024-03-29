import React from 'react';


const Image = ({ srcImg, nameImg }) => {
    return(
        <div className="w-100 d-flex justify-content-center">
            <img src={ srcImg } alt={ nameImg } width="200px" height="200px"/>
        </div>
    )
}

export default Image