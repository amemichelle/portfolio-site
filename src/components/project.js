import * as React from 'react';
import "../styles/index.scss";
//import DynamicImg from './dynamicimg';
import { StaticImage } from "gatsby-plugin-image";


const Project = ({projectTitle, projectDesc}) => {
    return (
        <div class="project-container">
            <div class="project-container__img">
             <StaticImage src="../images/git-cover.jpg" />
            </div>

            <div class="content-container">
                <div class="content-container__left">
                    <p class="project-title">{projectTitle}</p>
                    <p class="project-desc">{projectDesc}</p>
                </div>

                <div class="content-container__right">
                <StaticImage class="project-img" src="../images/right-arrow.svg" />

                </div>

            </div>

        </div>


    )


}

export default Project