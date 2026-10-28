import React from 'react'
import "./Navbar.css"

class Navbar extends React.Component {
    logoFirstName = "COLO";
    logoLastName = "SHOP";

    render() {
        return(
        <nav className='nav-bar'>
            <div className='nav-1'>
                <span style={{color:"black", fontSize:"30px", fontWeight:1000}}        >{this.logoFirstName}</span>
                <span style={{color:"red",fontSize:"30px" , fontWeight:1000 }}          >{this.logoLastName}</span>
            </div>
            <div className='nav-2'>
                <p>HOME</p>
                <p>SHOP</p>
                <p>PROMOTION</p>
                <p>PAGES</p>
                <p>BLOG</p>
                <p>CONTACT</p>
            </div>
        </nav>
    )}
}
export default Navbar