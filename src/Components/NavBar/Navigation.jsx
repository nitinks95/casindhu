import React, { useState } from "react";
import '../NavBar/style.css';

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
  DropdownItem,
} from "reactstrap";

function Navigation(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md">
      <div className="menu_block">
        <NavbarBrand href="/" className="logo">
          <a>
            <span className="b1">CA</span>
            <span className="b3">Sindhu</span>
          </a>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="pull-right">
          <Nav className="mr-auto center" navbar>
            <NavItem>
              <NavLink href="/components/" className="nav-navlink">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap" className="navlink">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="nav-navlink">
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem className="nav-navlink">Option 1</DropdownItem>
                <DropdownItem className="nav-navlink">Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem className="nav-navlink">Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default Navigation;
