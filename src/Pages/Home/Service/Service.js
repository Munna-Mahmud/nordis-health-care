import React from 'react';
import { Link } from 'react-router-dom';


import './Service.css';

const Service = ({ service }) => {

    const { name, price, description, img, id } = service;
    return (
        <div>
            <div className="service pb-3 ">
                <div className="cards mx-3  border-0 ms-5 ">
                 <img style={{borderRadius:"50%", height:"100px", width:"100px", marginRight:"5rem"}} src={img} alt="" />
                    <h4>{name}</h4>
                    <p >{price}</p>
                    <p>{description}</p>
                  <Link to={`/booking/${id}`}> <button className="btn bg-dark px-4 text-white">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;