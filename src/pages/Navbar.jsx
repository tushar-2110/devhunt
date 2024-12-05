import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand="lg" bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand  >DevHunt</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" >Home</Nav.Link>
            <Nav.Link as={NavLink} to="/profile/:id">Profile</Nav.Link>
            <Nav.Link href="#">Login/Signup</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
