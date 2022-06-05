import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="text-center">
          <Col className=" py-3">
            Copyright &copy; ProShop 2022{", "}
            <a href="mailto:shawritwik2@gmail.com">Ritwik Shaw</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
