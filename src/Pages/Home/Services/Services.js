import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id="services">
            <div className="services-body">
                <div className="service-container container mt-5">
                    <div>
                        <h2 style={{ fontWeight: "900" }}>Our Services</h2>
                        <p className="services-text" ><i className="fas fa-user-cog"></i> modern equipment and specialist</p>
                        <a style={{ color: "#30d2b9" }} href="/"> <u>More</u></a>
                    </div>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)

                    }

                </div>
            </div>
        </div>
    );
};

export default Services;