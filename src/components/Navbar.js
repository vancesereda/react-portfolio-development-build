import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, Modal, ModalHeader, ModalBody, ModalFooter , Button } from 'reactstrap';
import ContactPopover from './ContactPopover';
import './navbar.css';

export default class CustomNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  toggle = () =>  {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }


  render() {
    return (
        <Navbar className="bg-top-div head-font" light expand="md" sticky="top"> 
          <NavbarBrand href="/" className="brand" >Vance Sereda</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/projects">Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink><ContactPopover /></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }

}