import React, {useState} from 'react';
import '../assets/src/css/Header.css'
import profilePhoto from "../assets/img/profile-photo.jpg"
import DropDownProfile from "./DropDownProfile.tsx";
import NotesDropDown from "./NotesDropDown.tsx";

const Header = () => {
    const notifications = [
        {body: 'Уведомление1', id: '1'},
        {body: 'Уведомление2', id: '2'},
        {body: 'Уведомление3', id: '3'},
    ]
    const user = {
        name: 'Даниил',
        surname: 'Терегулов',
        age: '21',
        prof: 'Front-end'
    }
    const [openProfile, setOpenProfile] = useState(false)
    const [openNotes, setOpenNotes] = useState(false)
    return (
        <header className='header-top' header-theme='dark'>
            <div className="container-fluid">
                <div className="d-flex justify-content-between">
                    <div className="top-menu d-flex align-items-center">
                        buildControl
                    </div>
                    <div className="top-menu d-flex align-items-center">
                        <div className="dropdown">
                            <ion-icon name="notifications-outline" onClick={() => setOpenNotes((prev) => !prev)}></ion-icon>
                            <span className={notifications.length > 0 ? 'notifications' : 'none-notifications'}>{notifications.length}</span>
                            {
                             openNotes && <NotesDropDown/>
                            }
                        </div>

                        <div className="dropdown profile-main">
                            <div className="profile-avatar">
                                <img src={profilePhoto} alt="" className='avatar' onClick={() => setOpenProfile((prev) => !prev)}/>
                                {
                                    openProfile && <DropDownProfile />
                                }

                            </div>
                            <div className="profile-name">{user.name}</div>
                        </div>
                    </div>
                </div>
            </div>

        </header>

    );
};

export default Header;