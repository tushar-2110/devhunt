import React from 'react'
import { Button } from 'react-bootstrap'

const About = () => {
  return (
    <div className='about border w-100 m-2 bg-info text-white rounded shadow-lg d-flex flex-column align-items-center d-none d-md-block' style={{ height: "400px" }}>
      <h1 className='d-flex justify-content-center'>About</h1>
      <p className='d-flex align-items-center my-2 mx-2 border border-white    p-3 rounded text-center text-light'>
        DevHunt is an open-source social media platform designed specifically for developers, where they can connect, collaborate, and share knowledge with like-minded individuals. The project aims to create a community that fosters learning, discussions, and networking opportunities around the latest trends in technology and software development.
      </p>
      <p className='mx-2 mt-2'>
        Follow me on Github:
        <a
          className='text-decoration-none m-4'
          href="https://www.example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline-light">Github</Button>
        </a>
      </p>
    </div>
  )
}

export default About

