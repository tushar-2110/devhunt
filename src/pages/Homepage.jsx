import React from 'react';
import Post from '../components/Post';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import About from '../components/About';
import Quicklinks from '../components/Quicklinks';

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
              <Post/>
            
           
          </Col>
          <Col md={3} sm={6} xs={12} className="d-flex flex-column align-items-center">
            
            <Quicklinks/>
             
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Homepage;
