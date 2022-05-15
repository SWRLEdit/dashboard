import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

import './App.css';
import Home from "./components/Home/Home";
import Reason from "./components/Reason/Reason";
import Footer from "./components/Footer/Footer"


function App() {
  return (
    <BrowserRouter>
        <>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">SWRLEdit</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/reason">
                  Reasoning
                </Nav.Link>
                <Nav.Link to={{ pathname: "https://github.com/SWRLEdit" }} target="_blank">
                  Source
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reason" element={<Reason />} />
          </Routes>
        </div>
        <Footer></Footer>
    </BrowserRouter>
  )
}

export default App;
