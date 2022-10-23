import * as React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.scss";



const navbar = () => {
  return (
    <div class="navbar">
        <div class="navbar__left">
        <a href="/" class="logo-link">Michelle Swolfs</a>
        </div>
        <div class="navbar__right">
            <div class="menu-button">
                <StaticImage src="../images/menu-icon.svg" />
            </div>
        </div>
    
    </div>
  )
}

export default navbar