import React from 'react'
import './Limited_sides.css'
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./Header/Header";
import Profile from "./Profile/Profile";
import Navbar from "./Navbar/Navbar";
import Dialogs from "./Dialogs/Dialogs";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";

const Limited_sides = () => {
    return (
        <BrowserRouter>
            <div className='Limited_sides'>
                <Header/>
                <Navbar/>
                <div className='main_content'>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Limited_sides