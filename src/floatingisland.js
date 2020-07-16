import React from "react";
import "./portfolio.css";

class floatingisland extends React.Component {
    render() {
      return (
        <div>
        <header class="island" id="page-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="intro-text">
                  <span class="name">Floating Island Concept:</span>
                  <hr class="line-light" />
                  <p class="skills">Autonomous Walls</p>
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
                  <line />
                </div>
              </div>
                <p className="wrap">The Floating Island concept was a design for an </p>
                <div class="col-lg-12 text-center">
                  <h2><a href="https://silverasea.itch.io/inescapable-island">Play</a></h2>
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

export default floatingisland;