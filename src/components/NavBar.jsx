import React from 'react';
import { Link} from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';


const NavigationBar = () => {

    return (
    <Navbar>
        <Container>
            <Nav>
                <Link to="/" className="nav-link">Contact List</Link>
                <Link to="/ProductForm" className="nav-link">Add Product</Link>
                <Link to="/ProductList" className="nav-link">Product List</Link>
            </Nav>
        </Container>
    </Navbar>
    );
}

export default NavigationBar;