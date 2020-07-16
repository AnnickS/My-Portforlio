import React from "react";
import { Link } from 'react-router-dom';
import "./mainPage.css";

import logo from "./photos/logo.jpg";
import items from "./photos/ItemsIsItems.jpg";
import island from "./photos/FloatingIslands.png";
import InsuranceValidator from "./photos/InsuranceValidator.png";
import github from "./github.svg";
import linkedin from "./photos/linkedin.png";

class mainPage extends React.Component {
  render() {
    return (
      <div>
        <header class="mainPage.header" id="page-top">
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
                <div class="col-sm-4">
                  <Link to="/FloatingIsland"><img src={island} className="image-links" /></Link>
                </div>
                <div class="col-sm-4">
                  <Link to="/ItemsIsItems"><img src={items} className="image-links" /></Link>
                </div>
                <div class="col-sm-4">
                  <img src={InsuranceValidator} className="image-links" />
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
                  <p>
                    I am a software developer interested in video game
                    development. I have over a year experience developing in the
                    Unity Game Engine, and have worked with C#, React, and Java.
                    Go ahead and check out some of my examples above!
                  </p>
                </div>
                <div class="col-lg-4">
                  <p>
                    As an assistant working at the Bellevue College XR Lab I
                    construct workshops that are presented to classes across a
                    variety of vocations to help facilitate student learning,
                    while maintaining a focus on Virtual Reality.
                  </p>
                </div>
                <div class="col-lg-4">
                  <p>
                    In my spare time I play Dungeons and Dragons with friends,
                    game socially, and write short vignettes. My friends and
                    family are of highest importance to me, so when I can I
                    spend my time visiting and connecting with others.
                  </p>
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
              <div class="row">
                <div class="container">
                  <div class="row">
                    <div class="col-sm-6">
                      <a href="https://github.com/AnnickS">
                        <img src={github} className="icon-links" />
                      </a>
                    </div>
                    <div class="col-sm-6">
                      <a href="https://www.linkedin.com/in/annick-stefanin-69362390">
                        <img src={linkedin} className="icon-links" />
                      </a>
                    </div>
                  </div>
                </div>
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
