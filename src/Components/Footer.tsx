
import React from 'react';
import '../Style/Footer.scss';
import {ReactComponent as LinkedIn}  from "../Assets/linkedin.svg";
import {ReactComponent as Twitter} from '../Assets/twitter.svg';
import LogoFooter from '../Assets/logoFooter.svg';

type FooterProps = {
    dark : boolean;
}

const Footer = ({ dark } : FooterProps) => {
    const handleClickLinkedIn = () => {
        return;
    }

    const handleClickTwitter = () => {
        return;
    }

    return (
        <div className={dark ? "footer-container-dark" : "footer-container"}>
            <div className="footer-content-box">
                <div className="footer-frame3">
                <img src={LogoFooter} alt={"logoFooter"} className={"logo-footer"}/>
                <div className={"footer-frame2"}>
                    <div className={"icon-container"}>
                        <LinkedIn onClick={handleClickLinkedIn}/>
                        <Twitter onClick={handleClickTwitter}/>
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
        </div>
    )
}

export default Footer;
