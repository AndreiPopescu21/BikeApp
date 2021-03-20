import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

const NavbarComponent = () => {
    return (
    <Navbar bg="dark" expand="lg" variant="dark">
    <Navbar.Brand as = {Link} to = "/">Bike App</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto container-fluid">
        <Nav.Link as = {Link} to = "/">Home</Nav.Link>
        <Nav.Link as = {Link} to = "/tracker">Tracker</Nav.Link>
        <Nav.Link as = {Link} to = "/gps">GPS</Nav.Link>
        <Nav.Link as = {Link} to = "/rent">Rent Bikes</Nav.Link>
        <Nav.Link as = {Link} to = "/">Leaderboards</Nav.Link>
        <NavDropdown title="Other" id="basic-nav-dropdown">
            <NavDropdown.Item as = {Link} to = "/fitness">Fitness</NavDropdown.Item>
            <NavDropdown.Item as = {Link} to = "/">Average Details</NavDropdown.Item>
        </NavDropdown>
        <Nav.Item className="ml-auto">
            {
                localStorage.getItem("authToken") ? 
                    <Nav.Link as = {Link} to = "/profile"> Profile </Nav.Link>  
                 : 
                    <Nav.Link as = {Link} to = "/login">Login</Nav.Link>
            }
        </Nav.Item>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
    )
}

export default NavbarComponent;