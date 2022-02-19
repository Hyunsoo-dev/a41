import React from 'react';
import '../Style/Footer.scss';
import  LinkedIn  from "../Assets/linkedin.svg";
import Twitter from '../Assets/twitter.svg';
import LogoFooter from '../Assets/logoFooter.svg';

const Footer = () => {
    const handleClickLinkedIn = () => {
        return;
    }

    const handleClickTwitter = () => {

    }

    return (
        <div className="footer-container">
            <div className="footer-frame3">
                <img src={LogoFooter} alt={"logoFooter"} className={"logo-footer"}/>
                <div className={"footer-frame2"}>
                    <div className={"icon-container"}>
                        <img src={LinkedIn} alt={"linkedIn"} onClick={handleClickLinkedIn}/>
                        <img src={Twitter} alt={"twitter"} onClick={handleClickTwitter}/>
                    </div>
                    <p className={"first-child"}>
                        media@a41ventures.com
                    </p>
                    <p>
                        Copyright 2021.a41ventures all rights reserved.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;