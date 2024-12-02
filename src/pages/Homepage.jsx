import React from 'react';
import Post from '../components/Post';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import About from '../components/About';
import Quicklinks from '../components/Quicklinks';

const Homepage = () => {
  return (
    <div className="homepage">
      <Container fluid>
        {/* Main Row for Homepage Layout */}
        <Row className="g-3 justify-content-center">
          {/* About Section */}
          <Col md={3} sm={6} xs={12} className="d-flex flex-column align-items-center">
            <aside className="about-section">
              <About />
            </aside>
          </Col>

          {/* Post Section */}
          <Col md={6} sm={6} xs={12} className="d-flex flex-column align-items-center">
            <main className="post-section">
              <Post />
              <Post />
            </main>
          </Col>

          {/* Quicklinks Section */}
          <Col md={3} sm={6} xs={12} className="d-flex flex-column align-items-center">
            <aside className="quicklinks-section">
              <Quicklinks />
            </aside>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Homepage;
