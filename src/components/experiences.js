import * as React from 'react';
import "../styles/index.scss";
import { StaticImage } from "gatsby-plugin-image";


const Experience = ({experienceTitle,experienceDesc}) => {
return(
    <div class="experience">
    <div class="experience-container">
        <div class="experience-container__left">
            <p class="experience-title">{experienceTitle}</p>
            <p class="experience-desc">{experienceDesc}</p>
        </div>

        <div class="content-container__right">
        <StaticImage class="project-img" src="../images/menu-icon.svg" />
        </div>
    </div>
</div>
)
}

export default Experience