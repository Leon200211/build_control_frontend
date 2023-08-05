import React, {useContext, useEffect, useState} from 'react';
import { Tab, TabList, TabPanel } from "react-tabs";
import profilePhoto from "../assets/img/profile-photo.jpg"
import '../assets/src/css/Profile.css'
import '../assets/src/css/tabs.css'
import {Context} from "../index.tsx";
import Tabs from '../Components/tabs.tsx'
import Asider from "../Components/asider.tsx";
import {NavLink} from "react-router-dom";

const Profile = () => {
    const {store} = useContext(Context)
    useEffect(()=>{
        if(localStorage.getItem('token')){
            store.checkAuth()
        }
    }, [])
    const user = {
        name: 'Даниил',
        surname: 'Терегулов',
        age: '21',
        prof: 'Front-end'
    }
    const [name, setName] = useState(user.name)
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
            <div className='section'>
                <div className='container'>
                <div className="profile-info card">
                    <img src={profilePhoto} alt=""/>
                    <h2>{name} {user.surname}</h2>
                    <h1>Мне {user.age}. Я - {user.prof} разработчик</h1>
                </div>
                    <div className='container bloc-tabs'>
                        <div className="tabs">
                            <div onClick={() => toggleTab(1)} className={toggleState === 1 ? 'tab active-tab' : 'tab'}>
                                tab 1
                            </div>
                            <div onClick={() => toggleTab(2)} className={toggleState === 2 ? 'tab active-tab' : 'tab'}>
                                tab 2
                            </div>
                            <div onClick={() => toggleTab(3)} className={toggleState === 3 ? 'tab active-tab' : 'tab'}>
                                tab 3
                            </div>
                        </div>
                        <div className="tabs-content">
                            <div className={toggleState === 1 ? 'tab-content-active' : 'tab-content'}>1</div>
                            <div className={toggleState === 2 ? 'tab-content-active' : 'tab-content'}>
                                <label htmlFor="profile-name">Name</label>
                                <input type="text" className='profile-name' id='profile-name' value={name} onChange={event => setName(event.target.value)}/>
                            </div>
                            <div className={toggleState === 3 ? 'tab-content-active' : 'tab-content'}>3</div>
                        </div>
                    </div>
            </div>
        </div>
    );
};
export default Profile;