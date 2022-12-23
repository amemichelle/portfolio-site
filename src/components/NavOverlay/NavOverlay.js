import * as React from 'react';
import "../styles/global.scss";

function closeNav(){
    let nav = document.getElementById('nav-menu');
    nav.classList.remove('open');
    let body = document.getElementById('page-body');
    body.classList.remove('no-scroll');
}


const NavOverlay = () => {
    return(
        <div className="nav-container" id="nav-menu" style={{zIndex:1}} onClick={closeNav}>
            <div className="nav-container__items-parent">
            <div className="nav-container__items">
                <a href="" className="nav-container__link">Work</a>
                <a href="" className="nav-container__link">About</a>
                <a href="" className="nav-container__link">Resume</a>
            </div>
        </div>
        </div>
    )
}

export default NavOverlay;