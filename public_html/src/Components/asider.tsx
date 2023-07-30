import React from 'react';
import '../assets/src/css/Asider.css'
import { NavLink } from 'react-router-dom';

const Asider = () => {
    const activeLink = 'nav-list__link active';
    const normalLink = 'nav-list__link';
    return (
        <div>
            <aside>
                <div className="aside-title">СтройКонтроль</div>
                <div className="aside-items">
                    <div className="aside-item">
                        <ul><span className="list-title">Навигация</span>
                            <NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to='/'><li>Главная</li></NavLink>
                            <NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to='/3'><li>Проекты</li></NavLink>
                        </ul>
                    </div>
                    <div className="aside-item">
                        <ul><span className="list-title">Навигация</span>
                            <NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to='/2'><li>
                                <ion-icon name="apps-outline"></ion-icon>
                                Главная
                            </li></NavLink>
                            <NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to='/1'><li>
                                <ion-icon name="bag-handle-outline"></ion-icon>
                                Проекты
                            </li></NavLink>
                        </ul>
                    </div>
                    <div className="aside-item">
                        <ul><span className="list-title">Навигация</span>
                            <NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to='/4'><li>Главная</li></NavLink>
                            <NavLink className={({ isActive }) => isActive ? activeLink : normalLink} to='/5'><li>Проекты</li></NavLink>
                        </ul>
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default Asider;