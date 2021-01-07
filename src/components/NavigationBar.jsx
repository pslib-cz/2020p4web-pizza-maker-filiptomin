import React from 'react';
import {Navbar, Nav, NavItem, Button, NavbarBrand} from 'reactstrap';
function NavigationBar() {
    return (
        <Navbar>
            <NavbarBrand href="/">Pizza maker</NavbarBrand>
            <Nav>
                <NavItem>

                    <Button color="primary" className="m-1" href="/Pizza">Chci pizzu clasic</Button>
                    <Button color="primary" className="m-1" href="/Calzone">Chci Calzone</Button>
                    <Button color="primary" className="m-1" href="/Add">Přidat ingredienci</Button>
                </NavItem>
            </Nav>
        </Navbar>
        
    )
}
export default NavigationBar;