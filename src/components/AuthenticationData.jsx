import React, { useState } from 'react';
import { auth } from '../Firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const AuthenticationData = () => {
    const defaultData = {
        email: "",
        password: "",
    };

    const [formData, setFormData] = useState(defaultData);
    const [isSignUp, setIsSignUp] = useState(true); // Default is sign-up
    const [successMessage, setSuccessMessage] = useState("");
    const [loginMessage, setLoginMessage] = useState("");

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            if (formData.email !== "" && formData.password !== "") {
                if (isSignUp) {
                    const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
                    const user = userCredential.user;
                    console.log('User signed up:', user);
                    setSuccessMessage("Account created successfully!");
                } else {
                    await signInWithEmailAndPassword(auth, formData.email.trim(), formData.password.trim());
                    setLoginMessage("Log in success");
                }
            }
        } catch (error) {
            const errorMessage = error.message;
            console.error(errorMessage);
            setLoginMessage(`Error: ${errorMessage}`);
        } finally {
            setFormData(defaultData);
        }
    };

    return (
        <>
            <form onSubmit={onSubmitHandler} className='mt-5'>
                <input required type="email" placeholder='Email' value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                <input required type='password' placeholder='Password' value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                <button type="submit">{isSignUp ? 'Sign Up' : 'Log In'}</button>
            </form>

            <div>
                <label>
                    <input type="checkbox" checked={isSignUp} onChange={() => setIsSignUp(!isSignUp)} />
                    Sign Up
                </label>
            </div>

            {successMessage && <p>{successMessage}</p>}
            {loginMessage && <p>{loginMessage}</p>}
        </>
    );
}

export default AuthenticationData;
