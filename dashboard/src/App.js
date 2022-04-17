import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

import './App.css';
import Home from "./components/Home/Home";
import About from "./components/About/About";


function App() {
  return (
    <BrowserRouter>
      <div className="page-container">
        <div className="content-wrap">
          <div>
            <>
              <Navbar bg="dark" variant="dark">
                <Container>
                  <Navbar.Brand href="/">SWRLEdit</Navbar.Brand>
                  <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">
                      Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/about">
                      About
                    </Nav.Link>
                    <Nav.Link to={{pathname: "https://github.com/SWRLEdit"}} target="_blank">
                      Source
                    </Nav.Link>
                  </Nav>
                </Container>
              </Navbar>
            </>
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
