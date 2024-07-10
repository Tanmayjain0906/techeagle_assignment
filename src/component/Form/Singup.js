import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './form.css';

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");

    const navigate = useNavigate();

    function handleForm(event) {
        event.preventDefault();

        if (!name || !email || !password || !cPassword) {
            console.log(name);
            console.log(email)
            console.log(password);
            console.log(cPassword);
            alert("Please Fill all the fields");
            return;
        }
        else if (password !== cPassword) {
            alert("Paswword doesn't match");
            return;
        }
        else {
            navigate("/todo");
            setName("");
            setEmail("");
            setPassword("");
            setCPassword("");
        }

    }

    return (
        <div className="form-wrapper">
            <div className="form-container">
                <form className="form-content" onSubmit={handleForm}>
                    <h2>Signup</h2>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" placeholder="Enter your username" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" placeholder="Enter confirm password" value={cPassword} onChange={(e) => setCPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="form-button">Signup</button>
                    <p className="switch-form">
                        Already have an account? <Link to="/login">Login here</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;