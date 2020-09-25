import React, { useState } from 'react';
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
  DropdownItem
} from 'reactstrap';

import '../Navbar/Navbar.css';

function Navigation(_props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <Navbar light expand="md" sticky="top" className="navbar-styling">
      <div className="container">
          <NavbarBrand href="/" className="navbar-brand-styling">
            <span className="navbar-brand-styling-span b1">CA</span>
            <span className="navbar-brand-styling-span b3">Sindhu</span>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} className="text-muted"/>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" />
            <Nav navbar>
              <NavItem className="navitem-super-styling">
                <NavLink href="/components/" className="navitem-styling">Components</NavLink>
              </NavItem>
              <NavItem className="navitem-super-styling">
                <NavLink href="https://github.com/reactstrap/reactstrap" className="navitem-styling">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar  className="navitem-super-styling">
                <DropdownToggle nav caret className="navitem-styling">
                  Options
              </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                </DropdownItem>
                  <DropdownItem>
                    Option 2
                </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
          </div>
      </Navbar>
  );
}

export default Navigation;