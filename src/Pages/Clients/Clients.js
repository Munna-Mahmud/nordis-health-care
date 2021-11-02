import React from 'react';
import './Clients.css'

import client1 from '../../images/clients/clientss.jpg'
import client2 from '../../images/clients/client1 (2).jpg'
import client3 from '../../images/clients/client1 (3).jpg'
import client4 from '../../images/clients/client1 (4).jpg'
import client5 from '../../images/clients/client1 (5).jpg'
import client6 from '../../images/clients/client1 (6).jpg'
import client7 from '../../images/clients/client7.jpg'
import client from '../../images/clients/clients.jpg'

const Clients = () => {
    return (
        <div className="text-white" id="clients">
            <div className=" text-black">
                <h2 style={{ fontWeight: "900" }}>Our Clients</h2>
                <p style={{ fontStyle: "italic" }}>Since 2012</p>

            </div>
            <div >
                <div className="bg-light clients">
                    <div className="row">
                        <div className="col-4 px-0 mx-0">
                            <img className="img-fluid" src={client1} alt="" />
                            <img className="img-fluid" src={client4} alt="" />
                        </div>
                        <div class="col-4  px-0 mx-0">
                            {/* <img className="img-fluid " src={client5} alt="" /> */}
                            <img className="img-fluid " src={client3} alt="" />
                            <img className="img-fluid " src={client2} alt="" />
                        </div>
                        <div className="col-4  px-0 mx-0">
                            <img className="img-fluid " src={client6} alt="" />
                            <img className="img-fluid " src={client7} alt="" />

                        </div>
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: "white" }}>
                <div className="row  bg-gradient d-flex align-items-center text-dark rounded-3 p-5">

                    <div className="col-lg-5">
                        <h2 style={{ fontWeight: "900" }}>Statistic</h2>
                        <p style={{ fontStyle: "italic" }}>appeals to specialists</p>

                        <br />
                        <div className="progress ">
                            <div className="progress-bar text-dark" role="progressbar" style={{ width: " 100%", backgroundColor: "#51f9df" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"> Stomatology 100%</div>
                        </div>
                        <br />
                        <div className="progress " >
                            <div className="progress-bar  text-dark" role="progressbar" style={{ width: " 75%", backgroundColor: "#51f9df" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"> Psychology 75%</div>
                        </div>
                        <br />
                        <div className="progress">
                            <div className="progress-bar text-dark" role="progressbar" style={{ width: " 50%", backgroundColor: "#51f9df" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"> Orthopedy 50%</div>
                        </div>
                        <br />
                        <div className="progress">
                            <div className="progress-bar text-dark" role="progressbar" style={{ width: " 25%", backgroundColor: "#51f9df" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> Pediatry 25%</div>
                        </div>
                        <br />
                    </div>
                    <div className="col-lg-7">
                        <h2 style={{ fontWeight: "900" }}> Clients Say</h2>
                        <p style={{ fontStyle: "italic" }}>feedback about us</p>
                        <div className="card mx-5 p-4 bg-dark text-white">
                            <h6>Jannet Doe</h6>
                            <h6>Businessman</h6>
                            <div className="text-center">
                                <img style={{width:"100px", height:"100px", borderRadius:"50%"}} src={client} alt="" />
                                <br />
                                <i className="fas fa-star text-warning"></i>
                                <i className="fas fa-star text-warning"></i>
                                <i className="fas fa-star text-warning"></i>
                                <i className="fas fa-star text-warning"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <p>I want to express my deep gratitude to the surgery  John Valey  for his high professionalism. Very accurately and qualitatively performs its work. It's not the first time I've been referring this doctor</p>
                            <a style={{ color: "#30d2b9" }} href="/"> <u> More</u></a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clients;