import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const Booking = () => {
    const { servicesId } = useParams();

    const [servicesDetails, setServicesDetails] = useState([]);

    useEffect(() => {
        fetch('/serviceDetails.json')
            .then(res => res.json())
            .then(data => setServicesDetails(data))
    }, [servicesId])
    console.log(servicesDetails)

    const foundDetails = servicesDetails.find(service => service.id == servicesId)
    console.log(foundDetails)

    return (
        <div className="container d-flex justify-content-center " style={{marginTop:"6rem"}}>
            <Card style={{ width: '30rem' }} className="border-0">
                <Card.Img variant="top" style={{}} src={foundDetails?.img} />
                <Card.Body>
                    <Card.Title className="fw-bold fs-3">{foundDetails?.name}</Card.Title>
                    <Card.Text>
                        <h4>Book Now: {foundDetails?.price}</h4>
                        {foundDetails?.Details}
                    </Card.Text>
                    
                    <button className="btn btn-dark"><a style={{ textDecoration: "none", color:"white" }} href="/checkout">Make an Appointment</a> </button>
                </Card.Body>
            </Card>

        </div >
    );
};

export default Booking;