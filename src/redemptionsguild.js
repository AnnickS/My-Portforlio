import React from "react";
import "./portfolio.css";

import skillspage from "./photos/SkillsPage.png";
import titlespage from "./photos/TitlesPage.png";

class redemptionsguild extends React.Component {
  render() {
    return (
      <div>
        <header class="guild" id="page-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="intro-text">
                  <span class="name">VR Software Engineer</span>
                  <hr class="line-primary" />
                  <p class="skills">Unlit Games</p>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div class="content-wrapper">
          <section class="primary" id="about">
          <div class="container">
              <div class="row">
                <div class="col-lg-12 text-center">
                  <h2>About</h2>
                  <hr class="line-primary" />
                </div>
              </div>
              <p>Redemption’s Guild is a published 1-4 player co-op VR RPG focused on friends exploring, fighting, 
                and item collecting together.</p>
                <img src={skillspage} className="TextWrapRight"/>
              <p>I was hired in 2021 as a VR Software Engineer to develop new UI systems and optimize 
                preexisting code for better readability, implementation, and speed. I’ve improved pages 
                in our diegetic player UI book that allowed players to personalize titles, class abilities, 
                stats, and inventory, as well as restructured the page focused on networking to allow players 
                to leave and join rooms.</p>
              <p>I worked with Photon to supplement the existing multiplayer codebase and debug the systems 
                that synched spells, damage, enemies, player movement, and item spawning while players 
                in the same room load into different unity scenes.</p>
                <img src={titlespage} className="TextWrapLeft"/>
              <p>During early access launch I was a part of the team that fixed time sensitive bugs that 
                players mentioned and collaborated on how to fix and/or implement systems that players 
                requested. This included improving the tutorial system to show videos and allowed saving 
                tutorial checkpoints in any order, and fixing network and server connection issues.</p>
              <p>Redemption’s Guild can be found and purchased on its steam page:</p>
              <div class="col-lg-12 text-center">
                  <h3><a href="https://store.steampowered.com/app/1117200/Redemptions_Guild/">Steam Page</a></h3>
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

export default redemptionsguild;