import React from "react";
import "./Footer.scss";
import SourceControlIcon from "../../assets/source-control-icon.svg";
import CheckIcon from "../../assets/check-icon.svg";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlineWarning } from "react-icons/ai";
import {GrNotification} from "react-icons/gr";
const Footer = () => {
  return (
    <footer>
      <div className="footer__left">
        <div className="foot__item">
          <img src={SourceControlIcon} alt="source control icon" />
          <span>master</span>
        </div>
        <div className="foot__item">
          <MdOutlineCancel />
          0
          <AiOutlineWarning />0
        </div>
      </div>
      <div className="footer__right">
        <div className="foot__item">
          <img src={CheckIcon} alt="" />
          Prettier
        </div>
        <div className="foot__item">
          <GrNotification size={15}/>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
