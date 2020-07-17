import React from "react";
import "./portfolio.css";

import inspector from "./photos/FloatingIslandInspector.png";

class floatingisland extends React.Component {
    render() {
      return (
        <div>
        <header class="island" id="page-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="intro-text">
                  <span class="name">Floating Island</span>
                  <hr class="line-light" />
                  <p class="skills">Minamalist Styled Barriers</p>
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
                <p>The Floating Island was created as a project for my Animation 
                  and Game Design class. I modeled and textured the island, 
                  stone slabs and rocks in Maya and exported them to Unity.</p>
                <p>The overall concept was to create a traversable area that 
                  confined the player to that area. Instead of thinking about 
                  a solid wall or untraversable landscape, I instead opted to 
                  create moveable barriers that followed the player.</p>
                <p>With my friend’s assistance, I both figured out what form of 
                  mathematics I needed (parametric lines), and found an example 
                  showing that equation put into C# code. You can find the website 
                  and code examples <a href="https://www.habrador.com/tutorials/math/5-line-line-intersection/">here</a>.</p>
                <img src={inspector} className="TextWrapRight"/>
                <p>In order to make the script work, the designer must place 
                  the object at its startpoint in the unity scene, and insert 
                  the values for the endpoint in the inspector. When the game 
                  starts, the object will only be able to travel on the line 
                  connecting both points, though it will move to follow the player.</p>
                <p>Though the barriers stalk the player on their designated path, it 
                  is still possible to leave the island. This was intentional for future 
                  development. Underneath there is a collision box that resets the player 
                  to their initial starting position, preventing the player from falling 
                  through the world indefinitely.</p>
                <p>The code for this project can be found on my github 
                  under <a href="https://github.com/AnnickS/Floating-Island">floating-island</a>. 
                  You can play the level on itch.io using the link below.<br></br><br></br><br></br><br></br></p>
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