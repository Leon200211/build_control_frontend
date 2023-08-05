
// @ts-ignore
import LoginForm from './Components/LoginForm.tsx'
import {useContext, useEffect} from "react";
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import {Context} from "./index.tsx";
import {observer} from "mobx-react-lite";
import Profile from "./Pages/Profile.tsx";
import Asider from "./Components/asider.tsx";
import '../src/assets/src/css/main.css'
import Header from "./Components/Header.tsx";
import TabBar from "./Components/TabBar.tsx";
import Footer from "./Components/Footer.tsx";
import Projects from "./Pages/Projects/Projects.tsx";
import Project from "./Pages/Projects/Project.tsx";

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
                <Header />
                <Routes>
                    <Route path='/' element={<Profile />}></Route>
                    <Route path='/projects' element={<Projects />}></Route>
                    <Route path="/project/:id" element={<Project />} />
                </Routes>
            </Router>
            <Footer />
            </div>
    );
}

export default observer(App);
