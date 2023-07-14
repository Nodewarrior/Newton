import React, { useState } from "react";

import NavData from "./NavData";

import "./Navbar.css";

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <nav className="NavbarItems">
            <h1 className="logo"><i className="fab fa-react"></i></h1>
            <div className="menu-icons" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className="nav-menu">
                {NavData.map((item, index) => {
                    console.log(item);
                    return (
                        <li key={index}>
                            <a href={item.path}
                            className={item.cName}>{item.name}</a>
                        </li>
                    );
                })}
            </ul>
            <button className="nav-links-trial">Start Free Trial</button>
        </nav>
    );
};

export default Navbar;