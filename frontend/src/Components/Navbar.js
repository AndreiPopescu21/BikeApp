import {Navbar, Nav, Form, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

const NavbarComponent = () => {
    return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand as = {Link} to = "/">Bike App</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto container-fluid">
        <Nav.Link as = {Link} to = "/">Home</Nav.Link>
        <Nav.Link as = {Link} to = "/">Tracker</Nav.Link>
        <Nav.Link as = {Link} to = "/">GPS</Nav.Link>
        <Nav.Link as = {Link} to = "/">Rent Bikes</Nav.Link>
        <Nav.Link as = {Link} to = "/">Leaderboards</Nav.Link>
        <NavDropdown title="Other" id="basic-nav-dropdown">
            <NavDropdown.Item as = {Link} to = "/">Fitness</NavDropdown.Item>
            <NavDropdown.Item as = {Link} to = "/">Average Details</NavDropdown.Item>
        </NavDropdown>
        <Nav.Item className="ml-auto">
            <Nav.Link as = {Link} to = "/login">Login</Nav.Link>
        </Nav.Item>
        </Nav>
        <Form inline>
        </Form>
    </Navbar.Collapse>
    </Navbar>
    )
}

export default NavbarComponent;