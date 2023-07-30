
// @ts-ignore
import LoginForm from './Components/LoginForm.tsx'
import {useContext, useEffect} from "react";
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import {Context} from "./index.tsx";
import {observer} from "mobx-react-lite";
import Profile from "./Components/Profile.tsx";
import Asider from "./Components/asider.tsx";
import '../src/assets/src/css/main.css'

function App() {
    const {store} = useContext(Context)
    useEffect(()=>{
        if(localStorage.getItem('token')){
            store.checkAuth()
        }
    }, [])
    if(store.isLoading){
        return <div>Загрузка...</div>
    }
    if(!store.isAuth){
        return (
            <LoginForm />
        )
    }
    return (
        <div className="App" style={{display: "flex"}}>
            <Router>
                <Asider />
                <Routes>
                    <Route path='/' element={<Profile />}></Route>
                </Routes>
            </Router>
            </div>
    );
}

export default observer(App);
