import * as React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.scss";

function openNav() { 
  let nav = document.getElementById('nav-menu');
  nav.classList.add('open');
  let body = document.getElementById('page-body');
  body.classList.add('no-scroll');
}

const navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar__left">
        <a href="/" className="logo-link">Michelle Swolfs</a>
        </div>
        <div className="navbar__right">
            <div className="menu-button" onClick = {openNav}>
                <StaticImage src="../images/menu-icon.svg" />
            </div>
        </div>
    
    </div>
  )
}

export default navbar