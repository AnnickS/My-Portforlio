import React from "react";
import "./portfolio.css";

import diagram from "./photos/Project2Diagram.svg";

class itemsisitems extends React.Component {
  render() {
    return (
      <div>
        <header class="insurance" id="page-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="intro-text">
                  <span class="name">Medical Insurance Validator</span>
                  <hr class="line-primary" />
                  <p class="skills">A cloud-supported AWS system</p>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div class="content-wrapper">
          <section class="success" id="about">
          <div class="container">
              <div class="row">
                <div class="col-lg-12 text-center">
                  <h2>About</h2>
                  <hr class="line-primary" />
                </div>
              </div>
              <img src={diagram} class="center"/>
              <p></p>
                <p>The code for this project can be found on my github 
                  under <a href="https://github.com/AnnickS/insurance-validator">insurance-validator</a>.</p>
                <div class="col-lg-12 text-center">
              </div>
            </div>
          </section>
          <footer
            class="container"
          >
            {/* INSPIRED BY PURECSS.IO © 2015  */}
          </footer>
        </div>
      </div>
    );
  }
}

export default itemsisitems;