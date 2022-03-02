import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';

const NavContainer = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Class Manager</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <NavDropdown title="Search" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Class</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Instructor</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavContainer