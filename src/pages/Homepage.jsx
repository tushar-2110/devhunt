import React from 'react';
import Post from '../components/Post';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import About from '../components/About';

const Homepage = () => {
  return (
    <div >
      <Container fluid>
        {/* Row with centered columns */}
        <Row className="g-3 justify-content-center">
          
          <Col md={3} sm={6} xs={12} className="d-flex flex-column align-items-center">
            
            
               <About/>
            
            
          </Col>
          
          <Col md={6} sm={6} xs={12} className="d-flex flex-column align-items-center">
            
           
              <Post />
            
           
          </Col>
          <Col md={3} sm={6} xs={12} className="d-flex flex-column align-items-center">
            
            
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Homepage;
