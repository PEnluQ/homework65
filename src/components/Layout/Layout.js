import React, {Component} from 'react';
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";

class Layout extends Component {
    render() {
        return (
            <div>
                <div>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">Page</NavbarBrand>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink href="/components/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to='/content/admin'>Admin</NavLink>
                                </NavItem>
                            </Nav>
                    </Navbar>
                </div>
            </div>
        );
    }
}

export default Layout;