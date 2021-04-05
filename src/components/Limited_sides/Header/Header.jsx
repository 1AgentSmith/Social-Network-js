import React from 'react'
import Header_logo from '../../../images/Header_logo.png'
import hs from './Header.module.css'


const Header = () => {
    return (
        <div className={hs.Header}>
            <img src={Header_logo} alt=""/>
        </div>
    )
}

export default Header;