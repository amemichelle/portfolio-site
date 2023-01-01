// background things
import * as React from "react";
import "../styles/global.scss";
import "./Home.scss";

// components
import Navbar from "../components/Navbar/Navbar";
import NavOverlay from "../components/NavOverlay/NavOverlay";
import Category from "../components/Category/Category";
import Project from "../components/Project/project";
import Experience from "../components/Experiences/Experiences";
import Footer from "../components/Footer/Footer";

// images
import GitImage from "../images/git-cover.jpg";
import CultivateImage from "../images/cultivate.jpg";
import SurgeImage from "../images/surge.jpg";

const IndexPage = () => {
  return (
    <body id="page-body">
      <Navbar></Navbar>
      <NavOverlay></NavOverlay>
      <div className="hero">
        <h1 className="hero__title">
          Hello, I'm <span class="highlight">Michelle!</span>{" "}
        </h1>
        <p className="hero__details">
          Currently a product designer @ Guusto. Always pursuing new things to
          learn. Studied design @ Simon Fraser University.
        </p>
      </div>

      <Category categoryName="Work -- Other Projects"></Category>
      <Project
        projectTitle="led design & content strategy for tech-centric events impacting 1000+ participants."
        projectDesc="SFU Surge"
        projectImg={SurgeImage}
      ></Project>

      <Category categoryName="Work -- Class Projects"></Category>
      <Project
        projectTitle="Enhance the digital experience for girls in tech."
        projectDesc="IAT 333: Interaction Design Methods"
        projectImg={GitImage}
      ></Project>
      <Project
        projectTitle="Connecting employers, agencies, and individuals over microjobs."
        projectDesc="Civic Innocation Change Lab"
        projectImg={CultivateImage}
      ></Project>

      <Category categoryName="Experiences"></Category>
      <Experience
        experienceTitle="Junior Product Designer @ Guusto"
        experienceDesc="Championed the redesign of the company's mobile app, while managing grapic design, web design, and development tasks that influenced an increase in positive reviews on the company's G2 and Google Play store pages."
      ></Experience>
      <Experience
        experienceTitle="Marketing Directior @ SFU Surge"
        experienceDesc="Led the communication design, website design, and marketing strategy, for the club and it's flagship event resulting in 700+ followers, and impacting 1000+ event particpipants."
      ></Experience>

      <Category categoryName="Education"></Category>
      <Experience
        experienceTitle="Design @ Simon Fraser University"
        experienceDesc="September 2016 - June 2022"
      ></Experience>
      <Experience
        experienceTitle="Front-end Development @ Brainstation"
        experienceDesc="July 2022 - March 2023"
      ></Experience>

      <div className="split-experience">
        <Experience
          experienceTitle="Design Thinking @ Brainstation"
          experienceDesc="January 2019"
        ></Experience>
        <Experience
          experienceTitle="UX Design @ Ixperience"
          experienceDesc="July 2019 - August 2019"
        ></Experience>
      </div>
      <Footer></Footer>
    </body>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
