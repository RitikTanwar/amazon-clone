import React, { useState } from 'react'
import './Login.css';
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/');
            })
            .catch(err => err.message);
    }
    const register = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if (auth) {
                    history.push('/');
                }
            })
            .catch(error => alert(error.message));
    }
    return (
        <div className="login">
            <Link to="/">
                <img className="image_logo" src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" />
            </Link>
            <div className="login_box">
                <h1>Sign In</h1>
                <form>
                    <h4>E-mail Address</h4>
                    <input type="email" placeholder="Enter Your Email ID" value={email} onChange={e => setEmail(e.target.value)} />
                    <h4>Password</h4>
                    <input type="password" placeholder="Enter Your Email ID" value={password} onChange={e => setPassword(e.target.value)} />
                    <button className="login_signin_button" type="submit" onClick={signIn}>Sign In</button>
                </form>
                <p>By sign-in you agree to AMAZON FAKE CLONE consditions of use and sales . Please see privacy notice , are cookies notice and are Internet based ads notice</p>
                <button className="login_register_button" type="submit" onClick={register}>Create Account</button>
            </div>
        </div>
    )
}

export default Login
