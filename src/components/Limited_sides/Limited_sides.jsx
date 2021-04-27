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

const Limited_sides = (props) => {
    return (
        <BrowserRouter>
            <div className='Limited_sides'>
                <Header/>
                <Navbar/>
                <div className='main_content'>
                    <Route path='/profile' render={ () => <Profile postData={props.postData}/>}/>
                    <Route path='/dialogs' render={ () => <Dialogs DialogData={props.DialogData} MessagesData={props.MessagesData}/>}/>
                    <Route path='/news' render={ () => <News/>}/>
                    <Route path='/music' render={ () => <Music/>}/>
                    <Route path='/settings' render={ () => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Limited_sides