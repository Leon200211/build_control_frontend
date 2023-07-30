// @ts-ignore
import React, {FC, useContext, useState} from 'react';

import '../assets/src/css/LogForm.css'
import '../assets/node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../assets/node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import "../assets/node_modules/icon-kit/dist/css/iconkit.min.css"
import "../assets/node_modules/ionicons/dist/css/ionicons.min.css"
import "../assets/node_modules/perfect-scrollbar/css/perfect-scrollbar.css"
import "../assets/node_modules/datatables.net-bs4/css/dataTables.bootstrap4.min.css"
import "../assets/node_modules/jvectormap/jquery-jvectormap.css"
import "../assets/node_modules/tempusdominus-bootstrap-4/build/css/tempusdominus-bootstrap-4.min.css"
import "../assets/node_modules/weather-icons/css/weather-icons.min.css"
import "../assets/node_modules/c3/c3.min.css"
import "../assets/node_modules/perfect-scrollbar/css/perfect-scrollbar.css"
import "../assets/node_modules/owl.carousel/dist/assets/owl.carousel.css"
import "../assets/node_modules/owl.carousel/dist/assets/owl.theme.default.css"
import "../assets/dist/css/theme.min.css"

//scripts
import 'jquery';
import "../assets/node_modules/popper.js/dist/umd/popper.min.js"
import "../assets/node_modules/bootstrap/dist/js/bootstrap.min.js"
import "../assets/node_modules/perfect-scrollbar/dist/perfect-scrollbar.min.js"
import "../assets/node_modules/screenfull/dist/screenfull.js"
import "../assets/node_modules/datatables.net/js/jquery.dataTables.min.js"
import "../assets/node_modules/datatables.net-bs4/js/dataTables.bootstrap4.min.js"
import "../assets/node_modules/datatables.net-responsive/js/dataTables.responsive.min.js"
import "../assets/node_modules/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js"
import "../assets/node_modules/jvectormap/jquery-jvectormap.min.js"
import "../assets/node_modules/jvectormap/tests/assets/jquery-jvectormap-world-mill-en.js"
import "../assets/node_modules/moment/moment.js"
// import "../assets/node_modules/tempusdominus-bootstrap-4/build/js/tempusdominus-bootstrap-4.min.js"
import "../assets/node_modules/d3/dist/d3.min.js"
import "../assets/node_modules/c3/c3.min.js"


import {Context} from "../index.tsx";
import LogPhoto from "../assets/imgs/smlt_logo_blue_ru.png";
import bg_photo from "../assets/imgs/houses/ostafevo-1.jpg";
import {observer} from "mobx-react-lite";


const LoginForm: FC = () => {
    const [username, setUsername] = useState<String>('')
    const [password, setPassword] = useState<String>('')
    const {store} = useContext(Context);
    return (
        <div className="auth-wrapper">
            <div className="container-fluid h-100">
                <div className="row flex-row h-100 bg-white">
                    <div className="col-xl-8 col-lg-6 col-md-5 p-0 d-md-block d-lg-block d-sm-none d-none">
                        <div className="lavalite-bg"
                             style={{backgroundImage: `url(${bg_photo})`}}>
                            <div className="lavalite-overlay"></div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-7 my-auto p-0">
                        <div className="authentication-form mx-auto">
                            <div className="logo-centered">
                                <a>СтройКонтроль</a>
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder='Login' onChange={e => setUsername(e.target.value)} value={username}/>
                                    <i className="ik ik-user"></i>
                            </div>
                            <div className="form-group">
                                <input type="password" placeholder='Password' onChange={e => setPassword(e.target.value)} value={password} id='pass'/>
                                    <i className="ik ik-lock"></i>
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
                                    store.login(username, password)}} className='logBtn'>Войти</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default observer(LoginForm);