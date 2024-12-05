import React,{useState} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import CreateProfile from '../components/CreateProfile';

const Profile = () => {
  const technicalSkills = ["React", "Node.js", "JavaScript", "HTML", "CSS"];
  const nonTechnicalSkills = ["Problem-Solving", "Teamwork", "Time Management"];
  const tools = ["Git", "Visual Studio Code", "Figma"];

  const [modal,setModal]=useState(false);

  return (
    <div className="m-4" style={{ height: '100vh' }}>

       {modal&&<CreateProfile modal={modal} setModal={setModal} />}

       <div className='d-none d-sm-block' style={{ height: '100vh' }}>
       <Container style={{ height: '100%' }}>
        <Row className="h-100">
          {/* Left Column: Profile Details */}
          <Col xs={12} md={4} className="h-75" style={{ border: '2px solid #343a40', padding: '20px' }}>
            {/* Profile Image */}
            <div className="d-flex justify-content-around h-50">
              <Button onClick={()=>setModal(!modal)} variant="outline-dark h-25 mt-5">edit profile</Button>
              <Image
                src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="img-fluid h-75 w-50"
                rounded
                alt="Profile"
              />
            </div>

            {/* Social Links */}
            <div className="d-flex justify-content-center border border-2 border-dark rounded mt-3 p-2">
              <Button className="m-1" target="_blank" href="https://twitter.com" variant="outline-dark">
                Twitter
              </Button>
              <Button className="m-1" target="_blank" href="https://linkedin.com" variant="outline-dark">
                LinkedIn
              </Button>
              <Button className="m-1" target="_blank" href="https://instagram.com" variant="outline-dark">
                Instagram
              </Button>
              <Button className="m-1" target="_blank" href="https://leetcode.com" variant="outline-dark">
                LeetCode
              </Button>
            </div>

            {/* Personal Information */}
            <div className="d-flex align-items-center justify-content-center mt-3 border border-2 border-dark rounded p-3">
             
              <div>
                <p className="fw-bold">Name: Tushar Sharma</p>
                <p className="fw-bold">Email: tusharsharma@example.com</p>
                <p className="fw-bold">Mobile: 1234567890</p>
              </div>
            </div>
          </Col>

          {/* Right Column: Skills and Projects */}
          <Col xs={12} md={8} className="h-75" style={{ border: '2px solid #343a40', padding: '20px' }}>
            {/* Skills Section */}
            <div className="border border-2 rounded border-dark p-3 mb-3">
              <Row className="mb-3">
                <Col xs={12}>
                  <h5 className="fw-bold">Technical Skills:</h5>
                  <div className="d-flex flex-wrap gap-2">
                    {technicalSkills.map((skill, index) => (
                      <span
                        key={index}
                        className="badge bg-dark text-white px-3 py-2 rounded-pill"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col xs={12}>
                  <h5 className="fw-bold">Non-Technical Skills:</h5>
                  <div className="d-flex flex-wrap gap-2">
                    {nonTechnicalSkills.map((skill, index) => (
                      <span
                        key={index}
                        className="badge bg-secondary text-white px-3 py-2 rounded-pill"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <h5 className="fw-bold">Tools:</h5>
                  <div className="d-flex flex-wrap gap-2">
                    {tools.map((tool, index) => (
                      <span
                        key={index}
                        className="badge bg-info text-dark px-3 py-2 rounded-pill"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </Col>
              </Row>
            </div>

            {/* Projects Section */}
            <div
              className="p-3 border border-2 rounded border-dark"
              style={{ height: '200px', overflowY: 'auto' }}
            >
              <h5 className="fw-bold">Projects:</h5>
              <ul>
                <li className='text-decoration-none'>
                  <button className='rounded m-1 fw-bold bg-success text-white'>Project 1:</button> Description of project 1.
                </li>
                <li>
                <button className='rounded m-1 fw-bold bg-success text-white'>Project 2:</button> Description of project 2.
                </li>
                <li>
                <button className='rounded m-1 fw-bold bg-success text-white'>Project 3:</button> Description of project 3.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
       </div>
      
    </div>
  );
};

export default Profile;
