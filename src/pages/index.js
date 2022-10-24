// Step 1: Import React
import * as React from 'react'
import Navbar from '../components/navbar'
import Category from '../components/category';
import "../styles/index.scss";
import Project from '../components/project';


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
    
    </body>



  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage