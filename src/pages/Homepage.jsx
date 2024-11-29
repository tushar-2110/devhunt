import React from 'react';
import Post from '../components/Post';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Homepage = () => {
  return (
    <div>
      <Container fluid>
        {/* Row with centered columns */}
        <Row className="g-3 justify-content-center">
          {/* Each Col takes up 3 grid spaces on medium screens, 6 on small, and 12 on extra-small screens */}
          <Col md={3} sm={6} xs={12} className="d-flex justify-content-center">
            <Post />
          </Col>
          <Col md={3} sm={6} xs={12} className="d-flex justify-content-center">
            <Post />
          </Col>
          <Col md={3} sm={6} xs={12} className="d-flex justify-content-center">
            <Post />
          </Col>
          <Col md={3} sm={6} xs={12} className="d-flex justify-content-center">
            <Post />
          </Col>
          <Col md={3} sm={6} xs={12} className="d-flex justify-content-center">
            <Post />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Homepage;
