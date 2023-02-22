import React from 'react'
import { NavLink } from 'react-router-dom';


function Header() {
    return (
        <>
            <div className="container-fluid" id="navbar">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <ul id="menu">
                                <li> <NavLink to="/"> User Registration </NavLink> </li>
                                <li> <NavLink to="/"> Home page </NavLink> </li>
                                <li> <NavLink to="/login"> Login Page </NavLink> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header