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
        <div class="nav-container" id="nav-menu" style={{zIndex:1}} onClick={closeNav}>
            <div class="nav-container__items">
                <a href="" class="nav-container__link">Work</a>
                <a href="" class="nav-container__link">About</a>
                <a href="" class="nav-container__link">Resume</a>
            </div>
        </div>
    )
}

export default NavOverlay;