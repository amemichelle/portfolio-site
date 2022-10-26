import * as React from 'react';
import "../styles/global.scss";
import { StaticImage } from "gatsby-plugin-image";
import Linkedin from "../images/linkedin.svg";
import Github from "../images/github.svg";


const Footer = () => {
    return(
        <footer>
            <div className="footer__left">
                <p className="footer-name">Michelle Swolfs</p>
                <p className="footer-email">swolfsmichelle8@gmail.com</p>
            </div>
            <div className="footer__right">
            <img className="footer-img" src={Linkedin}/>
            <img className="footer-img" src={Github}/>
            </div>
        </footer>

    )
}

export default Footer