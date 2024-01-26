import React, { useState } from 'react'
import { db } from '../Firebase';
import { ref, set } from 'firebase/database';

const MyForm = () => {
    const defaultData = {
        gmail: "",
        password: "",
    }
    const [logindata, setLogindata] = useState(defaultData);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (logindata.gmail !== "" && logindata.password !== "") {
            console.log(logindata, "login")
            set(ref(db, 'users/'), {
                useremail: logindata.gmail,
                userpassword: logindata.password,
            });
        }
        setLogindata(defaultData);
    }

    return (
        <>
            <form action="" onSubmit={(e) => onSubmitHandler(e)} >
                <input required type="email" placeholder='Email' value={logindata.gmail} onChange={(e) => setLogindata({ ...logindata, gmail: e.target.value })} />
                <input required type='password' placeholder='Password' value={logindata.password} onChange={(e) => setLogindata({ ...logindata, password: e.target.value })} />
                <button type="submit">Log In</button>
            </form>
        </>
    )
}

export default MyForm