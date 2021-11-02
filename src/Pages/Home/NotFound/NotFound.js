import React from 'react';
import error from '../../../images/404 error.jpg'
const NotFound = () => {
    return (
        <div  style={{alignItems:"center", justifyContent:"center"}}>
            <img src={error} alt="" />
        </div>
    );
};

export default NotFound;