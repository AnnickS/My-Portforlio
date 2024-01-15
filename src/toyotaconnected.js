import React from "react";
import "./portfolio.css";
import YoutubeEmbed from "./YoutubeEmbed";

class toyotaconnected extends React.Component {
  render() {
    return (
      <div>
        <header class="toyota" id="page-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="intro-text">
                  <span class="name">Prototype Game Developer</span>
                  <hr class="line-primary" />
                  <p class="skills">Toyota Connected North America</p>
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
              <p>I had the opportunity to work with Toyota Connected North America on their Immersive Experiences team 
                through Apex Systems as a contractor, assisting in the creation of 4 different prototypes.</p>
                <p>Three of our prototypes were developed in Unity 3D, and one in Unreal Engine 5.2 where I had 
                  the opportunity to work with 4 different plugins and develop multiple blueprints to interact 
                  with UI features and game objects.</p>
                <p>This work required collaboration with product owners to convert business requirements into 
                  technical tasks. I also worked closely with our UI artist to revise feature requests to fit within 
                  budget and time constraints. </p>
                <p>On the team, I assisted in the completion of the Isodynamic Seat Simulator which was coded in 
                  Unity 3D, where I was in charge of creating gameplay features by scripting them in C# and 
                  implementing them onto game objects in the scene. I developed a data storage system to compare 
                  lap times and save them in a .json file, created a feature that would counteract the vehicle 
                  potentially flipping, and developed the end-game scoreboard, as well as assisted in ironing out 
                  bugs and developing other minor features.</p>
                <p>Our work on the Isodynamic Seat Simulator was displayed Halloween week at the SEMA convention 
                  in Las Vegas, where I helped run the booth for exhibit goers to experience.</p>
                <YoutubeEmbed embedId="5TcldRUL8xQ"/>
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

export default toyotaconnected;