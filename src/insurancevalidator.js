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
              <img src={diagram} class="center"/><br></br>
              <p>The Medical Insurance Validator was created using AWS 
                services and a Worker Background Service. This system was 
                used to provide information to the cloud, such as if a 
                medical patient’s insurance information was stored on an 
                external database not directly accessible from the cloud.</p>
              <p>Initially, an xml file would be added to an S3 bucket, 
                which would trigger a lambda service that read the request, 
                then wrote a following json request that would be sent to 
                a Simple Service Queue.</p>
              <p>The Worker Program, when running, would use long-polling 
                to check if there were any messages in the queue and if so, 
                receive each message individually. It would take that message 
                and retrieve the requested information from the database it 
                was connected to (in this instance an xml file on the computer).</p>
              <p>After retrieving the data, the Worker sends its own json 
                message to a different queue, which will then trigger the 
                final lambda function. The function reads the message, and 
                prints a ‘yes’ or ‘no’ to CloudWatch depending on if the 
                requested client has insurance information.</p>
              <p>The code for the lambda functions and worker service can be found on my github 
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