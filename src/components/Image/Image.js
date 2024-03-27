import React from 'react';


const Image = ({ srcImg, nameImg }) => {
    return(
        <div className="d-flex justify-content-center align-items-center col-12 col-md-5">
            <img src={ srcImg } alt={ nameImg } width="400px" height="400px"/>
        </div>
    )
}

export default Image