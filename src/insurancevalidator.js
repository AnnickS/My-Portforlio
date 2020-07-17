import React from "react";
import "./portfolio.css";

class itemsisitems extends React.Component {
  render() {
    return (
      <div>
        <header class="items" id="page-top">
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
                <p>Items is Items is a 2D RPG I developed in Unity alongside 
                  two other Bellevue College students as our senior project. 
                  Our focus was to create a game where all objects were interactable 
                  and had a purpose existing in the game.</p>
                  <a href="https://github.com/AnnickS/Items-is-Items">items-is-items.</a>
                <div class="col-lg-12 text-center">
                  <h2><a href="https://agroupofpeople.itch.io/items-is-items">Play</a></h2>
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