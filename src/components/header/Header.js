import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./header.css"
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Letflix</Navbar.Brand>
                <Nav className="me-auto">
                    <Link className='nav-link' to="/">Home</Link>
                    <Link className='nav-link' to="/Trending">Trending</Link>
                    <Link className='nav-link' to="/Favourite">Favourite</Link>
                    <Link className='nav-link' to="/About">About</Link>
                </Nav>
            </Container>
        </Navbar>
    )

}
export default Header