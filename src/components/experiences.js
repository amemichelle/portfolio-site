import * as React from 'react';
import "../styles/index.scss";
import { StaticImage } from "gatsby-plugin-image";
import arrowIcon from "../images/right-arrow.svg";

const Experience = ({experienceTitle,experienceDesc}) => {
return(
    <div class="experience">
    <div class="experience-container">
        <div class="experience-container__left">
            <p class="experience-title">{experienceTitle}</p>
            <p class="experience-desc">{experienceDesc}</p>
        </div>

        <div class="content-container__right">
        <img class="project-img" src={arrowIcon}/>
        </div>
    </div>
</div>
)
}

export default Experience