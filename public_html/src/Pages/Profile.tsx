import React, {useContext, useEffect, useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import profilePhoto from "../assets/img/profile-photo.jpg"
import '../assets/src/css/Profile.css'
import {Context} from "../index.tsx";
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
    const items = [
        {title: 'Контент1', content: 'Контент1'},
        {title: 'Контент2', content: 'Контент2'},
        {title: 'Контент3', content: 'Контент3'}
    ]
    const normalLink = 'nav-link';
    const activeLink = 'nav-link active';
    return (
        <div className='profile'>
            <div className="profile-info card">
                <img src={profilePhoto} alt=""/>
                <h2>{user.name} {user.surname}</h2>
                <h1>Мне {user.age}. Я - {user.prof} разработчик</h1>
            </div>
            <Tabs className="tabs card text-center">
                <TabList className='card-header'>
                        <Tab className="tab nav-link">React</Tab>
                        <Tab className="tab">Angular</Tab>
                        <Tab className="tab">Vuejs</Tab>

                </TabList>

                <TabPanel className='card-body'>
                    <h5 className="card-title">Special title treatment1</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </TabPanel>
                <TabPanel className='card-body'>
                    <h5 className="card-title">Special title treatment2</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </TabPanel>
                <TabPanel className='card-body'>
                    <h5 className="card-title">Special title treatment3</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </TabPanel>
            </Tabs>
            {/*<button onClick={store.logout()}>Выйти</button>*/}
        </div>
    );
};
export default Profile;