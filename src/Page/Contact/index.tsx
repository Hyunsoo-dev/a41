import React from "react";
import H0 from "../../Components/H0";
import {ReactComponent as LinkedIn} from "../../Assets/linkedin.svg";
import {ReactComponent as Twitter} from "../../Assets/twitter.svg";
import '../../Style/Contact.scss';
import Download from "./Download";


const Contact = () => {
  const handleClickLinkedIn = () => {
    return;
  }

  const handleClickTwitter = () => {
    return;
  }

  return <div className={"container_bk"}>
    <div className={"content_box"}>
      <H0 title={"contact"} />
      <div className={"mail"}>media@a41ventues.com</div>
      <div className={"row_box"}>
        <Twitter onClick={handleClickTwitter}/>
          <LinkedIn onClick={handleClickLinkedIn}/>
      </div>
      <div className={"row_box"}>
        <Download title={"Logo File Download"}/>
        <Download title={"Brand Guid Download"} />
      </div>
    </div>

  </div>;
};
export default Contact;
