// Step 1: Import React
import * as React from 'react'
import Navbar from '../components/navbar'
import Category from '../components/category';
import "../styles/index.scss";
import Project from '../components/project';
import Experience from "../components/experiences"
import Footer from "../components/footer"


const IndexPage = () => {
  return (
    <body>
      <Navbar></Navbar>

      <div class="home-info-container">
        <h1 class="hero-title">Hello, I'm <span class="highlight">Michelle!</span> </h1>
        <p class="hero-details">Currently a product designer @ Guusto. Always pursuing new things to learn. Studied design @ Simon Fraser University.</p>
      </div>

      <Category categoryName="Work -- Other Projects"></Category>
      <Project projectTitle="Enhance the digital experience for girls in tech."  projectDesc="IAT 333: Interaction Design Methods"></Project>
    
      <Category categoryName="Work -- Class Projects"></Category>
      <Project projectTitle="Enhance the digital experience for girls in tech."  projectDesc="IAT 333: Interaction Design Methods"></Project>


      <Category categoryName="Experiences"></Category>
      <Experience experienceTitle="Junior Product Designer @ Guusto" experienceDesc="placeholder text"></Experience>
      <Experience experienceTitle="Junior Product Designer @ Guusto" experienceDesc="placeholder text"></Experience>

      <Category categoryName="Education"></Category>
      <Experience experienceTitle="Design @ Simon Fraser University" experienceDesc="September 2016 - June 2022"></Experience>
      <Experience experienceTitle="Front-end Development @ Brainstation" experienceDesc="July 2022 - March 2023"></Experience>
      <Experience experienceTitle="Design Thinking @ Brainstation" experienceDesc="January 2019"></Experience>
      <Experience experienceTitle="UX Design @ Ixperience" experienceDesc="July 2019 - August 2019"></Experience>
      <Footer></Footer>



    </body>



  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage