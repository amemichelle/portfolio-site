import * as React from 'react';
import "../styles/global.scss";
import { StaticImage } from "gatsby-plugin-image";


const Footer = () => {
    return(
        <footer>
            <div class="footer__left">
                <p class="footer-name">Michelle Swolfs</p>
                <p class="footer-email">swolfsmichelle8@gmail.com</p>
            </div>
            <div class="footer__right">
            <StaticImage class="footer-img" src="../images/menu-icon.svg" />
            <StaticImage class="footer-img" src="../images/menu-icon.svg" />
            </div>
        </footer>

    )
}

export default Footer