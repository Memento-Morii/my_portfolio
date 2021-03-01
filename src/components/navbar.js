import React from "react";
import * as ReactBootStrap  from "react-bootstrap";
 
const NavBar= ()=> {
    return <div>
        <ReactBootStrap.Navbar className ="navbar" collapseOnSelect expand="lg" variant="dark">
  <ReactBootStrap.Navbar.Brand id="navbar-brand" href="#home">
      <img
      src ="/My Logo (2).jpg"
      />
  </ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="ml-auto">
      <ReactBootStrap.Nav.Link className="navitem" href="#deets"><div className ="navitem-font">Work</div></ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link className="navitem" href="#deets"><div className ="navitem-font">Profile</div></ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link className="navitem" href="#deets"><div className ="navitem-font">Contact</div></ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
    </div>
}
export default NavBar;