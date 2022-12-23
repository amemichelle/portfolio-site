import * as React from 'react';
import "../styles/global.scss";
import Linkedin from "../images/linkedin.svg";
import Github from "../images/github.svg";


const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__left">
                <p className="footer__name">Michelle Swolfs</p>
                <p className="footer__email">swolfsmichelle8@gmail.com</p>
            </div>
            <div className="footer__right">
            <img className="footer__img" src={Linkedin}/>
            <img className="footer__img" src={Github}/>
            </div>
        </footer>

    )
}

export default Footer