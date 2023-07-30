// @ts-ignore
import '../assets/LoginForm/LoginForm.css'
import React, {FC, useContext, useState} from 'react';
import {Context} from "../index.tsx";
import LogPhoto from "../assets/imgs/smlt_logo_blue_ru.png"
import {observer} from "mobx-react-lite";

function NavLink(props: { href: string, children: ReactNode }) {
    return null;
}

const LoginForm: FC = () => {
    const [username, setUsername] = useState<String>('')
    const [password, setPassword] = useState<String>('')
    const {store} = useContext(Context);
    return (
        <div className='container'>
            <div className="lavalite-bg">
                <div className="lavalite-overlay"></div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-7 my-auto p-0">
                <div className="authentication-form mx-auto">
                    <div className="logo-centered">
                        <NavLink href=""><img src={LogPhoto} /></NavLink>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder='Login' onChange={e => setUsername(e.target.value)} value={username}/>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder='Password' onChange={e => setPassword(e.target.value)} value={password}/>
                    </div>
                    <div className="row">
                        <div className="col text-left">
                            <label className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="item_checkbox"
                                       name="item_checkbox" value="option1" />
                                    <span className="custom-control-label">&nbsp;Запомнить меня</span>
                            </label>
                        </div>
                        <div className="col text-right">
                            <a href="#">Забыли пароль?</a>
                        </div>
                    </div>

                    <div className="sign-btn text-center">
                        <button onClick={() => { // @ts-ignore
                            store.login(username, password)}}>Войти</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default observer(LoginForm);