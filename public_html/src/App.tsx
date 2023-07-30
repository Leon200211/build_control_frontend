
// @ts-ignore
import LoginForm from './Components/LoginForm.tsx'
import './assets/main/main.css'
import {useContext, useEffect} from "react";
import {Context} from "./index.tsx";
import {observer} from "mobx-react-lite";

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
        <div className="App">
            <h1>{store.isAuth ? "Пользователь авторизован" : "войдите"}</h1>
            <button onClick={store.logout()}>Выйти</button>
            </div>
    );
}

export default observer(App);
