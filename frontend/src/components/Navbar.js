import React from 'react'
import { Link } from "react-router-dom"
import logo from "../assets/images/logo.svg"
import "../assets/css/navbar.css"
import user from "../assets/images/user.svg"

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="brand-img">
                    <img className="logo" src={logo}></img><h2>Creatosaurus <span>| Quotes</span></h2>
                </div>
                {/* <div className="links">
                    <li><Link className="color-link">Products</Link></li>
                    <li><Link className="color-link">Resources</Link></li>
                    <li><Link className="color-link">Pricing</Link></li>
                </div> */}
                <div className="side-links">
                    <li><Link className="color-link">Design with muse</Link></li>
                    <li><Link className="color-link">Cache it</Link></li>
                    <li><Link className="color-link">Saved</Link></li>
                    <li><img className="user" src={user}></img></li>
                </div>
            </div>
        </>

    )
}

export default Navbar
