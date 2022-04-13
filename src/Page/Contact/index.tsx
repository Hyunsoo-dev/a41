import React, { useEffect } from "react";
import H0 from "../../Components/H0";
import { ReactComponent as LinkedIn } from "../../Assets/linkedin.svg";
import { ReactComponent as Twitter } from "../../Assets/twitter.svg";
import {ReactComponent as Mail} from "../../Assets/icon/mail.svg";
import "../../Style/Contact.scss";
import Download from "./Download";
import { useRecoilState } from "recoil";
import { colorTheme } from "../../GlobalState/recoil";

const Contact = () => {
  const [headerColor, setHeaderColor] = useRecoilState(colorTheme);

  useEffect(() => {
    setHeaderColor("black");
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    return () => {};
  }, []);

  const handleClickLinkedIn = () => {
    return;
  };

  const handleClickTwitter = () => {
    return;
  };

  return (
    <div className={"container_bk"} style={{ minHeight: "100vh" }}>
      <div className={"content_box"}>
        <H0 title={"contact"} />
        <div className={"mail_box"}>
          <Mail className={"mail_icon"} />
          <div className={"mail"}>media@a41ventues.com</div>
        </div>

        <div className={"contact_row_box"}>
          <Download title={"Logo File Download"} />
          <Download title={"Brand Guid Download"} />
        </div>
        <Twitter onClick={handleClickTwitter} />
        <LinkedIn onClick={handleClickLinkedIn} />
      </div>

    </div>
  );
};
export default Contact;
