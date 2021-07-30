import { Fragment } from "react";
import { Navbar, Container } from "react-bootstrap";

const Nav = () => {
  return (
    <Fragment>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand>
            <h1 style={{ color: "white" }}>Shopping cart</h1>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Nav;
