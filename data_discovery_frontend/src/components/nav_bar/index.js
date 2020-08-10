import React from 'react'
// import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import * as ReactBootStrap from "react-bootstrap"
// import './styles.css'

const Nav_bar = () => ( <navbar id='main_navbar'>
    <ReactBootStrap.Navbar bg="dark" variant="dark">
    <ReactBootStrap.Navbar.Brand href="/">Data Discovery</ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Nav className="mr-auto">
      <ReactBootStrap.Nav.Link href="/">Home</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#business glossary">Business Glossary</ReactBootStrap.Nav.Link>
      {/* <ReactBootStrap.Nav.Link href="#pricing">Pricing</ReactBootStrap.Nav.Link> */}
    </ReactBootStrap.Nav>
    <ReactBootStrap.Form inline>
      <ReactBootStrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <ReactBootStrap.Button variant="outline-info">Search</ReactBootStrap.Button>
    </ReactBootStrap.Form>
  </ReactBootStrap.Navbar>
  </navbar>
 );

export default Nav_bar;