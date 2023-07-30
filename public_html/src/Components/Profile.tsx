import React, {useContext, useEffect} from 'react';
import profilePhoto from "../assets/img/profile-photo.jpg"
import {Context} from "../index.tsx";

const Profile = () => {
    const {store} = useContext(Context)
    useEffect(()=>{
        if(localStorage.getItem('token')){
            store.checkAuth()
        }
    }, [])
    return (
        <div>
            <img src={profilePhoto} alt=""/>
            <h1>{store.isAuth ? "Здрасьти" : "войдите"}</h1>
            <button onClick={store.logout()}>Выйти</button>
        </div>
    );
};

export default Profile;