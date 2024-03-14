import React from 'react';


const Image = ({ srcImg }) => {
    return(
        <div className="d-flex justify-content-center col-12 col-md-5 p-5">
            <img src={ srcImg } alt="" width="" height=""/>
        </div>
    )
}

export default Image