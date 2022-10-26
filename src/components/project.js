import * as React from 'react';
import "../styles/index.scss";
//import DynamicImg from './dynamicimg';
//import { StaticImage } from "gatsby-plugin-image";
import arrowIcon from "../images/right-arrow.svg";


const Project = ({projectTitle, projectDesc, projectImg}) => {
    return (
        <div className="project-container">
            <div className="project-container__img">
             <img className="project-tile-img" src={projectImg}/>
            </div>

            <div className="content-container">
                <div className="content-container__left">
                    <p className="project-title">{projectTitle}</p>
                    <p className="project-desc">{projectDesc}</p>
                </div>

                <div className="content-container__right">
                <img className="project-img" src={arrowIcon}/>

                </div>

            </div>

        </div>


    )


}

export default Project