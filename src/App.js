import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import TableList from "./components/MainMenu";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import './style/App.scss';
import Typed from 'typed.js';

function App() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>Game</i> News', ' Learn About Game'],
      typeSpeed: 100,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <Navbar expand="sm" bg="dark" variant="dark" className="navbar">
          <Container className="nav-cont m-0">
            <Navbar.Brand href="#home"><span ref={el} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Newest Release</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    About
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Github Link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <TableList />
    </div>
  );
}

export default App;