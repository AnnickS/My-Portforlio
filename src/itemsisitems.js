import React from "react";
import "./portfolio.css";

import inspector from "./photos/ItemsIsItemsUnityInspector.png";
import fov from "./photos/ItemsIsItemsFOV.png";

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
                  <hr class="line-primary" />
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
                  <h2>About</h2>
                  <hr class="line-primary" />
                </div>
              </div>
              <img src={inspector} className="TextWrapRight"/>
                <p>Items is Items is a 2D RPG I developed in Unity alongside 
                  two other Bellevue College students as our senior project. 
                  Our focus was to create a game where all objects were interactable 
                  and had a purpose existing in the game.</p>
                  <img src={fov} className="TextWrapLeft"/>
                <p>My role in developing the game, aside from contributing with 
                  documentation and design, was to program the NPCs. The NPC’s 
                  functionality included field of awareness and movement.</p>
                <p>The NPC rotates if there is a smellable object within range but
                   not within sight, and moves towards objects they see if they 
                   are attracted to those objects. Upon collision, the NPC gathers 
                   the item, and places it in their inventory (simultaneously 
                   removing it from world view), then returns to their original 
                   position. NPC’s also flee from objects they are scared of.</p>
                <p>The Physics2D class was used to detect if an object was within 
                  smelling or viewing distance, and raycasting was used to detect if 
                  objects were within sight or blocked by other objects. Test cases 
                  were included in the test suite to ensure the integrity of NPC functionality.</p>
                <p>Our final product can be played on itch.io with the link below. 
                  Our project code is displayed on github 
                  under <a href="https://github.com/AnnickS/Items-is-Items">items-is-items</a>.
                  <br></br><br></br><br></br><br></br></p>
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