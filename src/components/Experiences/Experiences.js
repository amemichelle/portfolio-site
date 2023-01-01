import * as React from "react";
// import "../../styles/global.scss";
// import "./Experiences.scss";
import arrowIcon from "../../images/right-arrow.svg";

const Experience = ({ experienceTitle, experienceDesc }) => {
  return (
    <div class="experience">
      <div class="experience__container">
        <div class="experience__left">
          <p class="experience__title">{experienceTitle}</p>
          <p class="experience__desc">{experienceDesc}</p>
        </div>

        <div class="experience__right">
          <img class="experience__icon" src={arrowIcon} />
        </div>
      </div>
    </div>
  );
};

export default Experience;
