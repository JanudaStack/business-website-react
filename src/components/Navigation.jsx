import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/Navigation.css';
import Button from 'react-bootstrap/Button';

function Navigation() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Zontoro</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto nav-bar">
                            <Nav.Link href="#home" className="mx-3">
                                Work
                            </Nav.Link>
                            <Nav.Link href="#about" className="mx-3">
                                About
                            </Nav.Link>
                            <Nav.Link href="#blog" className="mx-3">
                                Blog
                            </Nav.Link>
                            <Nav.Link href="#contact" className="mx-3">
                                Contact
                            </Nav.Link>
                        </Nav>
                        <Button variant="outline-primary" className="mx-3">
                            Buy Now
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;
