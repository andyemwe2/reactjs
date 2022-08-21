import { Container, Navbar, Nav } from 'react-bootstrap'
const ref = window.location.pathname
const refHome = (ref === '/') ? true : false
const refAlbums = (ref === '/albums') ? true : false
const refPosts = (ref === '/posts') ? true : false
const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">SODATONIN</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link style={({color: refHome ? 'white' : ''})} href="/">HOME</Nav.Link>
                    <Nav.Link style={({color: refAlbums ? 'white' : ''})} href="/albums">ALBUMS</Nav.Link>
                    <Nav.Link style={({color: refPosts ? 'white' : ''})} href="/posts">POSTS</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation