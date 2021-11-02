import React from 'react';
import about from '../../images/about.jpg'
import './About.css'

const About = () => {
    return (
        <div id="about" >
            <div style={{backgroundColor:"rgb(247, 248, 249)"}}>
                <div className="row  d-flex align-items-center rounded-3 p-5">

                    <div className="col-lg-7">
                        <img src={about} className="d-block w-100" alt="..." />
                    </div>
                    <div className="col-lg-5">
                        <h2 style={{fontWeight: "900"}}> About Us </h2>
                        <p style={{fontFamily: "sans-serif", fontStyle:"italic"}}>choose a convenient day and doctors</p>
                        <ul className="text-start ">

                            <p >High professional doctors level. All specialists have extensive <span style={{color:"#30d2b9"}}>practical experience</span> and regularly attend training courses in the educational centers.</p>


                            <p>Only modern and best equipment advanced <span  style={{color:"#30d2b9"}}>medical technologies</span>  and innovative diagnosis and  treatment methods and technology.</p>


                            <p>The optimum ratio of price and quality <span style={{color:"#30d2b9"}}>responsible and conscientious</span>  approach to each patient, highly qualified specialists in the field of health and services.</p>

                        </ul>
                        <button className="btn about-btn  text-decoration-none">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;