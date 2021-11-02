import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import { useLocation, useHistory } from 'react-router-dom'

const Login = () => {
    const { signInUsingGoogle, signInUsingGithub } = useAuth();
    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })

    }

    return (
        <div className="container" style={{ marginTop: "6rem" }}>
            <h3 >Sign in to Your Account
            </h3>
            <input className="p-1" type="text" placeholder="Your Email" required /> <br />
            <br />
            <input className="p-1" type="password" placeholder="Your Password" required /> <br />
            <br />
            <button className="btn btn-primary mt-2 mb-2">Submit</button>

            <h6> Or Sign In Using </h6>
            <button onClick={handleGoogleLogin} className="btn btn-danger mt-2 px-5"><a style={{ textDecoration: "none", color: "white" }} href="#booking"><i className="fab fa-google"></i> Google</a> </button>

            <button onClick={signInUsingGithub} className="btn btn-dark mt-2 ms-3 px-5"><a style={{ textDecoration: "none", color: "white" }} href="#booking"><i className="fab fa-github"></i> GitHub</a> </button>


            <p className=" mt-2">New To <span className="fw-bold">Nordis Center?</span> <button className="btn btn-light"><a style={{ textDecoration: "none" }} href="/register">Register Now</a> </button></p>

        </div>
    );
};

export default Login;