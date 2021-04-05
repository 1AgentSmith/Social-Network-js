import React from "react";
import ns from './Navbar.module.css';

const Navbar = () => {
    return(
        <div className={ns.Navbar}>
            <div className={ns.item}><a href="/profile">Profile</a></div>
            <div className={ns.item}><a href="/messages">Messages</a></div>
            <div className={ns.item}><a href="/news">News</a></div>
            <div className={ns.item}><a href="/music">Music</a></div>
            <div className={ns.item}><a href="settings">Settings</a></div>
        </div>
    )
}
export default Navbar