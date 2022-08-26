import React from "react";
import{
    Nav,NavBtn,NavBtnLink,NavMenu,NavLink
} from './navBarElements';
const NavBar = () => {
    return (
        <div>
            <Nav>
                <NavLink to="/">
                    <img src={require("../../assets/logo.jpg")} style={{ height:"45px", width:"45px"}} alt="logo"></img>
                </NavLink>
                {/* <Bars /> */}
                <NavMenu>
                    <NavLink to="/about" activeStyle>About</NavLink>
                    <NavLink to="/services" activeStyle>Services</NavLink>
                    <NavLink to="/contact" activeStyle>Contact Us</NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </div>
    )
}

export default NavBar