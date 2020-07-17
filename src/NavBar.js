import React, { Component } from "react";
import {MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from 'mdbreact';

class NavBar extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render(){
        return (
                <MDBNavbar color="purple-gradient" dark expand="md" scrolling fixed="top">
                    <MDBNavbarBrand>
                        <strong className="WhiteText">Annick's Portfolio</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav left>
                    <MDBNavItem>
                        <MDBNavLink to="/">Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBDropdown>
                            <MDBDropdownToggle nav caret>
                                <span className="mr-2">Projects</span>
                            </MDBDropdownToggle>
                            <MDBDropdownMenu>
                                <MDBDropdownItem href="/FloatingIsland">Floating Island</MDBDropdownItem>
                                <MDBDropdownItem href="/ItemsIsItems">Items is Items</MDBDropdownItem>
                                <MDBDropdownItem href="/InsuranceValidator">Insurance Validator</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                        <a href="https://github.com/AnnickS" target="_blank">
                            <MDBNavLink disabled to="">
                                <MDBIcon fab icon="github"/>
                            </MDBNavLink>
                            </a>
                        </MDBNavItem>
                        <MDBNavItem>
                        <a href="https://www.linkedin.com/in/annick-stefanin-69362390" target="_blank">
                            <MDBNavLink disabled to="">
                                <MDBIcon fab icon="linkedin"/>
                            </MDBNavLink>
                            </a>
                        </MDBNavItem>
                        <MDBNavItem>
                        <a href="https://twitter.com/UniqueAnnick1?s=09" target="_blank">
                            <MDBNavLink disabled to="">
                                <MDBIcon fab icon="twitter"/>
                            </MDBNavLink>
                            </a>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
        ); 
    }
}

export default NavBar;