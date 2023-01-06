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
                  <Link to="/RedemptionsGuild">
                    <img src={guild} className="image-links" />
                    <MDBMask className="flex-center" overlay="white-light">
                      <p className="black-text"><b>Redemption's Guild</b></p>
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
                  <p>I am a VR Game Developer with 2 years of professional 
                    experience and one shipped title. I graduated from Bellevue 
                    College with a Bachelor of Science in Computer Science in 
                    2020, and have three years of experience developing in the 
                    Unity Game Engine, two years in VR, and have worked with 
                    C#, Photon Engine, React, AWS, and Java.</p>
                  <p>This portfolio page is my own personal project developed 
                    with React and hosted on AWS using S3 and CloudFront. 
                    Go ahead and check out my work experience and my other 
                    projects above!</p>
                </div>
                <div class="col-lg-4">
                  <p>At my job as an assistant working at the Bellevue College 
                    XR Lab, I was able to work alongside some of the most 
                    passionate individuals with the goal of spreading the use 
                    of VR in education. I was responsible for constructing 
                    workshops that were presented to classes from across a 
                    variety of vocations to help facilitate student learning 
                    while maintaining a focus on virtual reality.</p>
                  <p>In my time there I developed a “Video Game Design in VR” 
                    workshop, focusing on the differences of VR game development 
                    in comparison with regular game design.</p>
                </div>
                <div class="col-lg-4">
                  <p>In my spare time I play Dungeons and Dragons with friends, 
                    practice ukulele, and create stories. I enjoy drawing, writing, 
                    and worldbuilding to further embellish the stories I design.</p>
                  <p>Friends and family are of utmost important to me, so I enjoy 
                    cooking and creating memorable experiences with them. My 
                    goal is to fill my life with amazing memories, and to 
                    create worthwhile experiences for others to enjoy.</p>
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
                    <p class="text-center w-responsive mx-auto mb-5">If you wish to get in contact 
                    please don't hesitate to send an email!</p>
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
