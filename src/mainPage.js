import React from "react";
import { Link } from 'react-router-dom';
import { MDBMask, MDBView } from "mdbreact";
import "./mainPage.css";
import EmailForum from "./emailForum";

import logo from "./photos/CroppedProfileImage.jpg";
import items from "./photos/ItemsIsItems.jpg";
import island from "./photos/FloatingIslands.png";
import insurance from "./photos/InsuranceValidator.png";
import guild from "./photos/RedemptionsGuildIcon.png";
import toyota from "./photos/simulator.jpg";
import resume from "./documents/AnnickStefaninResume.pdf";

class mainPage extends React.Component {
  render() {
    return (
      <div>
        <header class="mainPage.header">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="intro-text">
                  <span class="name">Annick Stefanin</span>
                  <hr class="line-light" />
                  <img src={logo} className="App-logo" alt="logo" />
                  <p class="tagline" >Software Engineer</p>
                  <Link to={resume} target="_blank" download><button class="btn btn-outline-secondary btn-md m-3">Download Resume</button></Link>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div class="content-wrapper">
          <section class="primary" id="portfolio">
          <div class="container">
              <div class="row">
                <div class="col-lg-12 text-center">
                    <h2>Work Experience</h2>
                    <hr class="line-primary" />
                </div>
              </div>
              <div class="row">
              <div class="col-md-4 mx-auto">
                <MDBView hover zoom className="image-links">
                  <Link to="/PrototypeGameDeveloper">
                    <img src={toyota} className="image-links" />
                    <MDBMask className="flex-center" overlay="white-light">
                      <p className="black-text text-center"><b>Prototype Game Developer<br/>Toyota Connected North America<br/>(2023)</b></p>
                    </MDBMask>
                    </Link>
                  </MDBView>
                  <p> </p>
                </div>
                <div class="col-md-4 mx-auto">
                <MDBView hover zoom className="image-links">
                  <Link to="/VRGameDeveloper">
                    <img src={guild} className="image-links" />
                    <MDBMask className="flex-center" overlay="white-light">
                      <p className="black-text text-center"><b>VR Software Engineer<br/>Unlit Games<br/>(2021-2022)</b></p>
                    </MDBMask>
                    </Link>
                  </MDBView>
                  <p> </p>
                </div>
              </div>
            </div>
          </section>
          <section class="success" id="portfolio">
            <div class="container">
              <div class="row">
                <div class="col-lg-12 text-center">
                  <h2>Projects</h2>
                  <hr class="line-primary" />
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                <MDBView hover zoom className="image-links">
                  <Link to="/FloatingIsland">
                    <img src={island} className="image-links"/>
                    <MDBMask className="flex-center" overlay="white-light">
                      <p className="black-text"><b>Floating Island</b></p>
                    </MDBMask>
                    </Link>
                  </MDBView>
                  <p> </p>
                </div>
                <div class="col-md-4">
                  <MDBView hover zoom className="image-links">
                    <Link to="/ItemsIsItems">
                      <img src={items} className="image-links" />
                      <MDBMask className="flex-center" overlay="white-light">
                        <p className="black-text"><b>Items Is Items</b></p>
                      </MDBMask>
                    </Link>
                  </MDBView>
                  <p> </p>
                </div>
                <div class="col-md-4 col-xs-1">
                <MDBView hover zoom className="image-links">
                  <Link to="/InsuranceValidator">
                    <img src={insurance} className="image-links" />
                    <MDBMask className="flex-center" overlay="white-light">
                      <p className="black-text"><b>Insurance Validator</b></p>
                    </MDBMask>
                    </Link>
                  </MDBView>
                </div>
              </div>
            </div>
          </section>
          <section class="primary" id="about">
            <div class="container">
              <div class="row">
                <div class="col-lg-12 text-center">
                  <h2>About</h2>
                  <hr class="line-light" />
                </div>
              </div>
              <div class="row">
                <div class="col-lg-4 col-lg-offset-2">
                <p>My goal is to fill my life with amazing memories and create worthwhile 
                  experiences for others to enjoy, and I wish to accomplish this goal through 
                  the creation of video games. Games can transport players into otherwise 
                  impossible environments and experiences, providing teaching, entertainment, 
                  stress relief, or ways for players to meet and accomplish goals together.</p>
                  <p>I want to bring my expertise to the table, assisting in refining design 
                    and code so that a player can have a cohesive experience. A worthwhile 
                    game is achieved only if developers put in the effort to reduce bugs and 
                    create fun gameplay elements for the player to enjoy. For your message or 
                    story to have an impact, ironing out the fundamentals is key. </p>
                </div>
                <div class="col-lg-4">
                <p>I am a results-driven programmer with three years of professional 
                    experience in game development. Specializing in both Virtual 
                    Reality (VR) and prototype game development, I bring two years of 
                    expertise in VR and one year in prototypes to the table. Notable 
                    among my achievements is the successful delivery of a shipped VR 
                    title, showcasing my ability to contribute to impactful projects. 
                    Additionally, I played a key role in developing a driving simulator 
                    featured at SEMA, underlining my capacity to bring innovative ideas 
                    to fruition. My commitment to excellence and proven track record 
                    make me a valuable asset to any forward-thinking development team.</p>
                </div>
                <div class="col-lg-4">
                    <p>This portfolio page is my own personal project developed with React 
                    and hosted on AWS. As a static website, it is served from an S3 bucket, 
                    benefiting from automatic HTTPS certification renewal through AWS 
                    technologies such as CloudFront, S3, Certificate Manager, and Route 
                    53. Forum submissions were developed with Javascript, and the website 
                    design was specified with custom made CSS code. I invite you to explore 
                    some of my other personal projects and find detailed information about 
                    my professional work experience in the links located above!</p>
                </div>
              </div>
            </div>
          </section>
          <section class="success" id="contact">
            <div class="container">
              <div class="row">
                <div class="col-lg-12 text-center">
                  <h2>Connect</h2>
                  <hr class="line-primary" />
                </div>
              </div>
                <div class="center">
                    <p class="text-center w-responsive mx-auto mb-5">Feel free to reach 
                    out by sending an email if you'd like to get in touch!</p>
                    <EmailForum/>
                </div>
            </div>
          </section>
          <footer
            class="container"
            // style="min-height:200px; background-color:#18bc9c;color:#fff;text-align:center;padding-top:50px;"
          >
            {/* INSPIRED BY PURECSS.IO © 2015  */}
          </footer>
        </div>
      </div>
    );
  }
}

export default mainPage;
