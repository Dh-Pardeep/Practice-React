import React, { useState } from 'react';
import { dbfs } from '../Firebase';
import { doc, setDoc } from 'firebase/firestore';

const FirestoreData = () => {
    const defaultData = {
        gmail: "",
        password: "",
    };
    const [logindata, setLogindata] = useState(defaultData);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        if (logindata.gmail !== "" && logindata.password !== "") {
            console.log(logindata, "login");

            // Create an asynchronous function
            const addUserData = async () => {
                await setDoc(doc(dbfs, "users/", logindata.gmail), {
                    useremail: logindata.gmail,
                    userpassword: logindata.password,
                });
            };

            // Call the asynchronous function
            await addUserData();
        }
        setLogindata(defaultData);
    };

    return (
        <>
            <form action="" onSubmit={(e) => onSubmitHandler(e)} className='mt-5'>
                <input required type="email" placeholder='Email' value={logindata.gmail} onChange={(e) => setLogindata({ ...logindata, gmail: e.target.value })} />
                <input required type='password' placeholder='Password' value={logindata.password} onChange={(e) => setLogindata({ ...logindata, password: e.target.value })} />
                <button type="submit">Log In</button>
            </form>
        </>
    );
};

export default FirestoreData;
