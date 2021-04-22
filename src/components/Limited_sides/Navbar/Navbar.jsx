import React from "react";
import ns from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return(
        <div className={ns.Navbar}>
            <div className={ns.item}>
                <NavLink to='/profile' activeClassName={ns.activeLink}>Profile</NavLink>
            </div>
            <div className={ns.item}>
                <NavLink to='/dialogs' activeClassName={ns.activeLink}>Dialogs</NavLink>
            </div>
            <div className={ns.item}>
                <NavLink to='/news' activeClassName={ns.activeLink}>News</NavLink>
            </div>
            <div className={ns.item}>
                <NavLink to='/music' activeClassName={ns.activeLink}>Music</NavLink>
            </div>
            <div className={ns.item}>
                <NavLink to='/settings' activeClassName={ns.activeLink}>Settings</NavLink>
            </div>
        </div>
    )
}
export default Navbar