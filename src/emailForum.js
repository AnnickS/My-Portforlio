import React, { Component } from "react";

export default class emailForum extends Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: "",
            showingAlert: false
        };
    }

    handleClickShowAlert() {
        this.setState({
            showingAlert: true
        });

        setTimeout(() => {
            this.setState({
                showingAlert: false
            });
        }, 2000);
    }

    render() {
        const { status } = this.state;
        return (
    <div class="row">
        {/* <div class="col-md-9 mb-md-0 mb-5"> */}
        <div class="col-md-9">
            <form
            onSubmit={this.submitForm}
            id="contact-form"
            name="contact-form"
            action="https://formspree.io/mnqgowkd"
            method="POST">
                <div class="row">
                    <div class="col-md-6">
                        <div class="md-form mb-0 mx-3 mx-sm-0">
                            <input type="text" id="name" name="name" placeholder="Your name" class="form-control"/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="md-form mb-0 mx-3 mx-sm-0">
                            <input type="email" id="email" name="email" placeholder="Your email" class="form-control"/>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0 mx-3 mx-sm-0">
                            <input type="text" id="subject" name="subject" placeholder="Subject" class="form-control"/>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mx-3 mx-sm-0">
                            <textarea type="text"
                            id="message"
                            name="message"
                            rows="2"
                            placeholder="Your message"
                            class="form-control md-textarea"></textarea>
                        </div>
                    </div>
                </div>
                <div class="text-center text-md-left">
                    {status === "SUCCESS" ? <p>Thanks!</p> : <button class="btn btn-primary">Submit</button>}
                    {status === "ERROR" && <p>There was an error submitting the forum</p>}
                </div>
            </form>
        <div class="status"></div>
    </div>
        <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>Snohomish, WA 98296, USA</p>
                </li>
                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p>+1425-892-3288</p>
                </li>
                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p>annick.stefanin@gmail.com</p>
                </li>
            </ul>
        </div>
    </div>
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if(xhr.readyState !== XMLHttpRequest.DONE) return;
            if(xhr.status === 2000) {
                form.reset();
                this.setState({ status: "SUCCESS"});
                this.handleClickShowAlert();
            } else {
                this.setState({ status: "ERROR" });
                this.handleClickShowAlert();
            }
        };
        xhr.send(data);
    }
}