import React from 'react';
import '../assets/src/css/DropDown.css'
import {NavLink} from "react-router-dom";
const DropDownProfile = () => {
    return (
        <div className="dd-profile">
            <NavLink className={({ isActive }) => isActive ? 'dd-item' : 'dd-item'} to='/'>Профиль</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'dd-item' : 'dd-item'} to='/'>Настройки</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'dd-item' : 'dd-item'} to='/'>Выйти</NavLink>
        </div>
    );
};

export default DropDownProfile;