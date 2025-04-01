import logo from '../images/logo.png';
import React from 'react';
const Header = () => {
    return(
        <>
           <div className="myHeaders">
               <div className="mainHeader">
                    <div className="topHeader container">
                            <div>Call Us : (91) 8489900331 & (91) 8489900332 Mail : qtreetechnologies@gmail.com</div>
                            <div>F | G | I | T </div>
                    </div>
               </div>
               <div className="menuHeader">
                    <div className="topMenu container">
                            <div>
                                <img src={logo} alt="logo" className="logo" />
                            </div>
                            <div>
                                <ul className="menuList">
                                    <li>Home</li>
                                    <li>About Us</li>
                                    <li>Services</li>
                                    <li>Portfolio</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                        </div>
               </div>
           </div>
        </>
    );
}
export default Header;