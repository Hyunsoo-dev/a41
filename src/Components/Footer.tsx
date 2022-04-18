import React from "react";
import "../Style/Footer.scss";
import {ReactComponent as LinkedIn} from "../Assets/linkedin.svg";
import {ReactComponent as Twitter} from "../Assets/twitter.svg";
import LogoFooter from "../Assets/logoFooter.svg";
import {useRecoilState} from "recoil";
import {colorTheme} from "../GlobalState/recoil";
import {useLocation} from "react-router-dom";


const Footer = () => {
    const [headerColor, setHeaderColor] = useRecoilState(colorTheme);
    const location = useLocation();

    const getFooterColor = () => {
        switch (headerColor) {
            case "black":
                return "footer-container-dark";
            case "white":
                return "footer-container";
            case "trans":
                return location.pathname === "/contents" ? "footer-container" : "footer-container-dark";
            default:
                return "footer-container";
        }
    }

    return (
        <div
            className={getFooterColor()}>
            <div className="footer-content-box">
                <div className="footer-frame3">
                    <img src={LogoFooter} alt={"logoFooter"} className={"logo-footer"}/>
                    <div className={"footer-frame2"}>
                        <div className={"icon-container"}>
                            <a href={"https://twitter.com/a41_ventures"} target={"_blank"} rel={"noreferrer"}>
                                <LinkedIn />
                            </a>
                            <a href={"https://kr.linkedin.com/company/a41-ventures"} target={"_blank"}
                               rel={"noreferrer"}>
                                <Twitter />
                            </a>
                        </div>
                        <p className={"first-child"}>media@a41ventures.com</p>
                        <p>Copyright 2021.a41ventures all rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
