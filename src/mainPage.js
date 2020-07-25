import React from "react";
import { Link } from 'react-router-dom';
import { MDBMask, MDBView } from "mdbreact";
import "./mainPage.css";
import EmailForum from "./emailForum";

import logo from "./photos/logo.jpg";
import items from "./photos/ItemsIsItems.jpg";
import island from "./photos/FloatingIslands.png";
import insurance from "./photos/InsuranceValidator.png";

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
                  <p class="skills">Software Engineer</p>
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
          <section class="success" id="about">
            <div class="container">
              <div class="row">
                <div class="col-lg-12 text-center">
                  <h2>About</h2>
                  <hr class="line-light" />
                </div>
              </div>
              <div class="row">
                <div class="col-lg-4 col-lg-offset-2">
                  <p>I am a software developer with a Bachelor of Science 
                    in Computer Science interested in video game and VR/AR 
                    development. I have over a year experience developing 
                    in the Unity Game Engine, and have worked with C#, 
                    React, AWS, and Java.</p>
                  <p>This portfolio page is my own personal project developed 
                    with React and hosted on AWS using S3 and CloudFront. Go 
                    ahead and check out some of my other projects above!</p>
                </div>
                <div class="col-lg-4">
                  <p>At my last job as an assistant working at the Bellevue 
                    College XR Lab, I was able to work alongside the most 
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
          <section class="primary" id="contact">
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
