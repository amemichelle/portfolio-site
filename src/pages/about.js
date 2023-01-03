import * as React from "react";
import Navbar from "../components/Navbar/Navbar.js";
import NavOverlay from "../components/NavOverlay/NavOverlay";
import Footer from "../components/Footer/Footer.js";
import me from "../images/me.jpg";
import Collapsable from "../components/Collapsable/Collapsable.js";
import "./about.scss";

import cultivateIG from "../images/cultivate-ig.png";
const AboutPage = () => {
  return (
    <body>
      <Navbar></Navbar>
      <NavOverlay></NavOverlay>
      <div className="about">
        <p className="about__title">
          Michelle again -- Here's some quick things about me!
        </p>
        <img
          className="about__image"
          src={me}
          alt="image of me from 2020"
        ></img>
        <div className="about__summary">
          <p className="about__bold">summary</p>
          <p>
            I'm a highly motivated, interdisciplinary designer with 2+ years of
            professional experience in the private and non-profit sectors. I
            have a proven record of, and continuous growth in design and
            front-end development skills. I use this to communciate strongly
            between technical teams, leading to persistent success and
            continuous growth.
          </p>
        </div>
        <Collapsable heading="Starting from the beginning">
          <p>
            I'm Michelle, a recent graduate from Simon Fraser University's
            Interactive Arts + Technology program and current diploma candidate
            in Brainstation's Web Development program.
          </p>

          <p>
            Currently I work at Guusto as a Junior Designer on a small design
            team. In this role, I've had the opportunity to learn more about
            brand, design systems, product + web design, and design advocacy.
          </p>

          <p>
            After hours, I spend time volunteering my skills at the Youth Mental
            Health Association, an organization empowering youth to become
            leaders in the mental health sector.
          </p>
        </Collapsable>

        <Collapsable heading="why design(for me)">
          <p>
            From legos, to jigsaw puzzles, to robots that come in a box, I've
            always been two things -- a problem solver and a builder. All of
            these things can get complicated, messy, and difficult but design
            gives me a method to working through challenges. Design has always
            been about making things, not necessarily beautiful, but easier.
          </p>
        </Collapsable>

        <Collapsable heading="Sometimes I post my work">
          <p>
            I'm nowhere near perfect with it -- but sometimes I post my
            hackathon and for fun work over at @mich.dsgns. Feel free to take a
            look!
          </p>

          <div className="ig">
            <div className="ig__container">
              <img className="ig__image" src={cultivateIG}></img>
            </div>
            <div className="ig__container">
              <img className="ig__image" src={cultivateIG}></img>
            </div>
            <div className="ig__container">
              <img className="ig__image" src={cultivateIG}></img>
            </div>
          </div>
        </Collapsable>
        <p>
          Thank you for taking the time to get to know me a little bit more! If
          you need some more info, check out my resume!
        </p>
      </div>
      <Footer></Footer>
    </body>
  );
};

export const Head = () => <title>About Me</title>;

export default AboutPage;
