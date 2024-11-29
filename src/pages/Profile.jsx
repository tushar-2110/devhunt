import React from 'react';
import { Container, Row, Col,Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const Profile = () => {
  return (
    <div className='m-4' style={{ height: '100vh' }}> 
      <Container style={{ height: '100%' }}>
        <Row className="h-100">
          {/* Left column with image */}
          <Col xs={4} className="h-75" style={{  border: '2px solid #343a40',padding: '20px' }}>
            <div className="d-flex justify-content-center h-50">
              {/* Image with roundedCircle class */}
              <Image
                src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="img-fluid  h-75 w-50"
                rounded
              />
            </div>
            
            <div className=' d-flex justify-content-center border border-2 border-dark rounded '>
                <Button className='m-1' target="_blank" href="https://www.example.com" variant="outline-dark">Twitter</Button>
                <Button className='m-1' target="_blank" href="https://www.example.com" variant="outline-dark">Linkedin</Button>
                <Button className='m-1' target="_blank" href="https://www.example.com" variant="outline-dark">Instagram</Button>
                <Button className='m-1' target="_blank" href="https://www.example.com" variant="outline-dark">Leetcode</Button>                 
            </div>

            <div className='d-flex align-items-center justify-content-center mt-2 border border-2 border-dark rounded'>
             <div className='mt-3'>
             <p className="fw-bold   p-2 rounded">Name: Tushar Sharma</p>
             <p className="fw-bold   p-2 rounded">Email: tusharsharma@example.com</p>
             <p className="fw-bold   p-2 rounded">Mobile-No: 1234567890</p>
             </div>
            </div>

          </Col>

          {/* Right column */}
          <Col xs={8} className="h-75" style={{border: '2px solid #343a40',padding: '20px' }}>
            Content for 70% width
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
