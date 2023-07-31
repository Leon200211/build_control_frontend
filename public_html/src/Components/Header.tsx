import React from 'react';
import '../assets/src/css/Header.css'
import profilePhoto from "../assets/img/profile-photo.jpg"

const Header = () => {
    return (
        <header className='header-top' header-theme='dark'>
            <div className="container-fluid">
                <div className="d-flex justify-content-between">
                    <div className="top-menu d-flex align-items-center">
                        buildControl
                    </div>
                    <div className="top-menu d-flex align-items-center">
                        <div className="dropdown">
                            Уведомления
                        </div>
                        <div className="dropdown">
                            <img src={profilePhoto} alt="" className='avatar'/>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    );
};

export default Header;