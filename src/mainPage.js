import React from "react";
import "./mainPage.css";
import logo from "./logo.jpg";
import items from "./ItemsIsItems.jpg";
import island from "./FloatingIslands.png";
import github from "./github.svg";
import linkedin from "./linkedin.png";

class mainPage extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-default navbar-fixed-top">
          <div class="container">
            {/* <!-- Brand and toggle get grouped for better mobile display --> */}
            <div class="navbar-header page-scroll">
              <button
                type="button"
                class="navbar-toggle"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#page-top">
                Start Bootstrap
              </a>
            </div>
            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
            <div
              class="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul class="nav navbar-nav navbar-right">
                <li class="hidden">
                  <a href="#page-top"></a>
                </li>
                <li class="page-scroll">
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li class="page-scroll">
                  <a href="#about">About</a>
                </li>
                <li class="page-scroll">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            {/* <!-- /.navbar-collapse --> */}
          </div>
          {/* <!-- /.container-fluid --> */}
        </nav>
        <header className="mainPage.header" id="page-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="intro-text">
                  <span class="name">Annick Stefanin</span>
                  <hr class="star-light" />
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
                  <h2>Portfolio</h2>
                  <hr class="star-primary" />
                </div>
              </div>
              <div class="row">
                <div class="col-sm-4">
                  <img src={island} className="image-links" />
                </div>
                <div class="col-sm-4">
                  <img src={items} className="image-links" />
                </div>
                <div class="col-sm-4">
                  <img src={items} className="image-links" />
                </div>
              </div>
            </div>
          </section>
          <section class="success" id="about">
            <div class="container">
              <div class="row">
                <div class="col-lg-12 text-center">
                  <h2>About</h2>
                  <hr class="star-light" />
                </div>
              </div>
              <div class="row">
                <div class="col-lg-4 col-lg-offset-2">
                  <p>
                    I am a software developer interested in video game
                    development. I have over a year expereince developing in the
                    Unity Game Engine, and have worked with C#, React, and Java.
                    Go ahead and check out some of my examples above!
                  </p>
                </div>
                <div class="col-lg-4">
                  <p>
                    As an assistant working at Bellevue College XR Lab I
                    construct workshops that are presented to classes across a
                    variety of vocations to help facilitate student learning,
                    while maintaining a Virtual Reality focus.
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
                  <hr class="star-primary" />
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

                  {/* <!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. -->
                    <!-- The form should work on most web servers, but if the form is not working you may need to configure your web server differently. --> */}
                  {/* <form name="sentMessage" id="contactForm" novalidate="">
                    <div class="row control-group">
                      <div class="form-group col-xs-12 floating-label-form-group controls">
                        <label>Name</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Name"
                          id="name"
                          required=""
                          data-validation-required-message="Please enter your name."
                        />
                        <p class="help-block text-danger"></p>
                      </div>
                    </div>
                    <div class="row control-group">
                      <div class="form-group col-xs-12 floating-label-form-group controls">
                        <label>Email Address</label>
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Email Address"
                          id="email"
                          required=""
                          data-validation-required-message="Please enter your email address."
                        />
                        <p class="help-block text-danger"></p>
                      </div>
                    </div>
                    <div class="row control-group">
                      <div class="form-group col-xs-12 floating-label-form-group controls">
                        <label>Phone Number</label>
                        <input
                          type="tel"
                          class="form-control"
                          placeholder="Phone Number"
                          id="phone"
                          required=""
                          data-validation-required-message="Please enter your phone number."
                        />
                        <p class="help-block text-danger"></p>
                      </div>
                    </div>
                    <div class="row control-group">
                      <div class="form-group col-xs-12 floating-label-form-group controls">
                        <label>Message</label>
                        <textarea
                          rows="5"
                          class="form-control"
                          placeholder="Message"
                          id="message"
                          required=""
                          data-validation-required-message="Please enter a message."
                        ></textarea>
                        <p class="help-block text-danger"></p>
                      </div>
                    </div>
                    <br />
                    <div id="success"></div>
                    <div class="row">
                      <div class="form-group col-xs-12">
                        <button type="submit" class="btn btn-success btn-lg">
                          Send
                        </button>
                      </div>
                    </div>
                  </form> */}
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
