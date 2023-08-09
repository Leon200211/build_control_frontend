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
        name: 'Даниил Терегулов',
        age: '21',
        prof: 'Front-end',
        phone: '+7 (800) 555-35-35',
        mail: 'test@test.ru',
        desc: 'Я рабочий',
    }
    const [name, setName] = useState(user.name)
    const [prof, setProf] = useState(user.prof)
    const [phone, setPhone] = useState(user.phone)
    const [mail, setMail] = useState(user.mail)
    const [desc, setDesc] = useState(user.desc)
    const [photo, setPhoto] = useState(profilePhoto)
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index)
    }



    return (
            <div className='section'>
                <div className='container'>
                <div className="profile-info card">
                    <img src={photo} alt=""/>
                    <h2>{name}</h2>
                    <h1>Мне {user.age}. Я - {prof} разработчик</h1>
                    <h1>Обо мне: {desc}</h1>
                </div>
                    <div className='container bloc-tabs'>
                        <div className="tabs">
                            <div onClick={() => toggleTab(1)} className={toggleState === 1 ? 'tab active-tab' : 'tab'}>
                                Информация
                            </div>
                            <div onClick={() => toggleTab(2)} className={toggleState === 2 ? 'tab active-tab' : 'tab'}>
                                Редактировать профиль
                            </div>
                            <div onClick={() => toggleTab(3)} className={toggleState === 3 ? 'tab active-tab' : 'tab'}>
                                Настройки
                            </div>
                        </div>
                        <div className="tabs-content">
                            <div className={toggleState === 1 ? 'tab-content active-content' : 'tab-content'}>
                                <div className="title">Данные</div>
                                <div className="tabs-items">
                                    <div className="tab-item">
                                        <div className="left-side">ФИО</div>
                                        <div className="right-side">{name}</div>
                                    </div>
                                    <div className="tab-item">
                                        <div className="left-side">Должность</div>
                                        <div className="right-side">{prof}</div>
                                    </div>
                                    <div className="tab-item">
                                        <div className="left-side">Телефон</div>
                                        <div className="right-side">{phone}</div>
                                    </div>
                                    <div className="tab-item">
                                        <div className="left-side">Почта</div>
                                        <div className="right-side">{mail}</div>
                                    </div>
                                    <div className="tab-item">
                                        <div className="left-side">Информация</div>
                                        <div className="right-side">{desc}</div>
                                    </div>
                                </div>
                            </div>
                            <div className={toggleState === 2 ? 'tab-content active-content' : 'tab-content'}>

                                <div className="tab-item photo">
                                    <span>Фото</span>
                                    <div className="upload-avatar">
                                        {setPhoto && (
                                        <img src={photo} alt="" width='250px'/>
                                        )}
                                        <label htmlFor="profile-photo"><ion-icon name="cloud-upload-outline"></ion-icon></label>
                                        <button onClick={() => setPhoto(null)}><ion-icon name="trash-outline"></ion-icon></button>
                                        <input type="file" className='profile-input' id='profile-photo' onChange={
                                            (event) => {
                                                setPhoto(
                                                    URL.createObjectURL(event.target.files[0])
                                                );
                                        }}/>
                                    </div>
                                </div>
                                <div className="tab-item">
                                    <label htmlFor="profile-name">ФИО</label>
                                    <input type="text" className='profile-input' id='profile-name' value={name} onChange={event => setName(event.target.value)}/>
                                </div>
                                <div className="tab-item">
                                    <label htmlFor="profileprofe">Должность</label>
                                    <input type="text" className='profile-input' id='profile-prof' value={prof} onChange={event => setProf(event.target.value)}/>
                                </div>
                                <div className="tab-item">
                                    <label htmlFor="profile-phone">Телефон</label>
                                    <input type="text" className='profile-input' id='profile-phone' value={phone} onChange={event => setPhone(event.target.value)}/>
                                </div>
                                <div className="tab-item">
                                    <label htmlFor="profile-mail">Почта</label>
                                    <input type="text" className='profile-input' id='profile-mail' value={mail} onChange={event => setMail(event.target.value)}/>
                                </div>
                                <div className="tab-item">
                                    <label htmlFor="profile-desc">Информация</label>
                                    <textarea className='profile-input' id='profile-desc' value={desc} onChange={event => setDesc(event.target.value)}/>
                                </div>
                                <button className='submit'>Сохранить</button>

                            </div>
                            <div className={toggleState === 3 ? 'tab-content active-content' : 'tab-content'}>
                                <div className="title">Приватные данные</div>
                                <div className="tab-item">
                                    <label htmlFor="profile-login">Логин</label>
                                    <input type="text" className='profile-input' id='profile-login'  placeholder='Логин...'/>
                                </div>
                                <div className="tab-item">
                                    <label htmlFor="profile-password">Пароль</label>
                                    <div className="pass-inputs" id={'profile-password'}>
                                        <input type="text" className='profile-input pass' id='old-pass' placeholder='Старый пароль...'/>
                                        <input type="text" className='profile-input pass' id='new-password' placeholder='Новый пароль...'/>
                                        <input type="text" className='profile-input pass' id='submit-password' placeholder='Подтвердите пароль...'/>
                                    </div>
                                </div>
                                <button className='submit'>Сохранить</button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};
export default Profile;