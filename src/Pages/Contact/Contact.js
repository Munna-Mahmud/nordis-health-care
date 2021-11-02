import React from 'react';
import contact from '../../images/undraw_contact_us_15o2.svg'
import './Contact.css'

const Contact = () => {
    return (
        <div id="contact">

            <div className="contact">

                <h2 style={{ fontWeight: "900" }} className="mt-5">Call Doctor</h2>
                <p style={{ fontStyle: "italic" }}>contact details of the office</p>
                <div className="row container d-flex align-items-center rounded-3 p-5">

                    <div className="col-lg-6  " style={{ alignItems: "center" }}>

                        <img src={contact} alt="" />
                        <ul className="text-start fw-bold">

                            <p >Office location – our office consists of three buildings and is located in the heart of the city. <br /> You can easily reach us by metro or by land transport.</p>

                            <p>OMonday to Friday: 9:00 AM to 6:00 PM <br />
                                Saturday: 9:00 AM to 5:00 PM <br />
                                Sunday: Closed</p>

                            <p >Address: 685 Lane Drive St. California, 33020 <br />
                                Phone: +010 234 7892 34 <br />
                                Fax: +010 435 5798982 <br />
                                Email: info@nordis.com.</p>
                        </ul>
                    </div>
                    <div className="col-lg-6 " style={{ alignItems: "center" }}>
                        <form className="w-100">
                            <div class="mb-3">

                                <input type="text" style={{ backgroundColor: "rgb(247, 248, 249)" }} class="form-control" id="exampleInputText" aria-describedby="emailHelp" placeholder="Name" />
                            </div>
                            <div class="mb-3" >

                                <input type="email" style={{ backgroundColor: "rgb(247, 248, 249)" }} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                            </div>
                            <div class="mb-3">
                                <input type="password" style={{ backgroundColor: "rgb(247, 248, 249)" }} class="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div class="mb-3 ">
                                <input type="massage" style={{ backgroundColor: "rgb(247, 248, 249)" }} class="form-control p-5" id="exampleInputPassword1" placeholder="Massage" />
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" class="btn btn-dark">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;