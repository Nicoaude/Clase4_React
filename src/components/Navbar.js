import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function ListExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">El mercadito</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">INICIO</Nav.Link>
            <Nav.Link href="#action2">ARMÁ TU PC</Nav.Link>
            <NavDropdown title="COMPONENTES DE PC" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">MOTHERBOARDS</NavDropdown.Item>
              <NavDropdown.Item href="#action4">PLACAS DE VIDEO</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">MEMORIAS RAM</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar..."
              className="me-2"
              aria-label="Search"
            />
            <span style={{fontSize:"1.5rem"}}>
            <FontAwesomeIcon icon={faMagnifyingGlass} /></span>
            <span style={{fontSize:"1.5rem"}}><FontAwesomeIcon icon={faCartShopping} /></span>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ListExample;