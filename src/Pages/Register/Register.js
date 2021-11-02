import React from 'react';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { signInUsingGoogle,  signInUsingGithub } = useAuth();
    return (
        <div id="register" className="mt-5 p-2">
            <h3 className="">Create a New Account</h3>
            <input type="text" className="p-1" required placeholder="Your name" /> <br />
            <br />
            <input type="email"   className="p-1" required placeholder="Your email"/> <br />
            <br />
            <input type="password"   className="p-1" required placeholder="Password" /> <br />
            <br />
            <button className="btn btn-primary">Submit</button>
            <h6>Already have an account? <button  className="btn btn-light"> <a href="/login"> Log In</a></button></h6>
           <p>or Sign In with </p>
           <button onClick={signInUsingGoogle} className="btn btn-danger mt-2"><a style={{textDecoration:"none", color:"white"}} href="#booking"><i className="fab fa-google"></i> Google</a> </button>

           <button onClick={ signInUsingGithub} className="btn btn-dark mt-2 ms-3"><a style={{textDecoration:"none", color:"white"}} href="#booking"><i className="fab fa-github"></i> GitHub</a> </button>
        </div>
    );
};

export default Register;