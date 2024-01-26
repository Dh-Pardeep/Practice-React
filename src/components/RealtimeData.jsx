import React, { useState } from 'react'
import { dbrt } from '../Firebase';
import { ref, set } from 'firebase/database';

const RealtimeData = () => {
    const defaultData = {
        gmail: "",
        password: "",
    }
    const [logindata, setLogindata] = useState(defaultData);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (logindata.gmail !== "" && logindata.password !== "") {
            console.log(logindata, "login")
            set(ref(dbrt, 'users/'), {
                useremail: logindata.gmail,
                userpassword: logindata.password,
            });
        }
        setLogindata(defaultData);
    }

    return (
        <>
            <form action="" onSubmit={(e) => onSubmitHandler(e)} className='mt-5'>
                <input required type="email" placeholder='Email' value={logindata.gmail} onChange={(e) => setLogindata({ ...logindata, gmail: e.target.value })} />
                <input required type='password' placeholder='Password' value={logindata.password} onChange={(e) => setLogindata({ ...logindata, password: e.target.value })} />
                <button type="submit">Log In</button>
            </form>
        </>
    )
}

export default RealtimeData