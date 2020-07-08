import React from "react";
import "./portfolio.css";
import items from "./photos/ItemsIsItems.jpg";

class itemsisitems extends React.Component {
  render() {
    return (
      <div>
        <header class="items" id="page-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="intro-text">
                  <span class="name">Items is Items</span>
                  <line />
                  <p class="skills">A 2D Top-down RPG</p>
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
                  <h2>Gallery</h2>
                  <line />
                </div>
              </div>
              <div class="row">
              </div>
            </div>
          </section>
          <section class="success" id="about">
            <div class="container">
              <div class="row">
                <div class="col-lg-12 text-center">
                  <h2>About</h2>
                  <line />
                </div>
              </div>
              <div class="row">
                <div class="col-lg-4 col-lg-offset-2">
                  <p>
                    Items is Items is a 2D RPG created as a senior project I 
                    assisted in developing alongside 2 other Bellevue College 
                    students. Developed in Unity 2D, our focus was to create a 
                    game where all objects were interactable and had a purpose 
                    existing in the game.
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
                  <h2><a href="https://agroupofpeople.itch.io/items-is-items">Play</a></h2>
                </div>
              </div>
              <div class="row">
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