import React from 'react';
import team1 from '../../images/team/team.jpg'
import team2 from '../../images/team/team4.jpg'
import team3 from '../../images/team/team1.jpg'

const Team = () => {
    return (
        <div className="container mt-5" id="team">
            <h2 style={{textAlign:"start", marginLeft:"2rem", fontWeight: "900"}} >Our Team</h2>
            <p  style={{textAlign:"start", marginLeft:"2rem", fontStyle:"italic"}}>Our Professionals</p>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 pb-5 ">
                <div className="col">
                    <div class="card border-0 h-80">
                        <img src={team1} className="card-img-top" alt="..."/>
                        <p style={{fontWeight: "700", marginTop:"2rem", fontFamily:"sans-serif"}}>Dr.Flip</p>
                        <p>Cardiology, Surgery</p>
                        
                    </div>
                </div>
                <div className="col">
                    <div className="card border-0 h-80">
                        <img src={team2} className="card-img-top" alt="..."/>
                        <p style={{fontWeight: "700" , marginTop:"2rem", fontFamily:"sans-serif"}}>Dana Elvin</p>
                        <p>Pediatrics, Laboratory</p>
                        
                    </div>
                </div>
                <div className="col">
                    <div className="card border-0 h-80">
                        <img src={team3} className="card-img-top" alt="..." />
                        <p style={{fontWeight: "700" , marginTop:"2rem", fontFamily:"sans-serif"}}>Anna Winds</p>
                        <p>Therapist, Surgery</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;