import * as React from 'react';
import "../styles/index.scss";
import arrowIcon from "../images/right-arrow.svg";


const Project = ({projectTitle, projectDesc, projectImg}) => {
    return (
        <div className="project">
            <div className="project__img">
             <img className="project__tile-img" src={projectImg}/>
            </div>

            <div className="project__content">
                <div className="project__left">
                    <p className="project__title">{projectTitle}</p>
                    <p className="project__desc">{projectDesc}</p>
                </div>

                <div className="project__right">
                <img className="project__img" src={arrowIcon}/>

                </div>

            </div>

        </div>


    )


}

export default Project