import { Button } from 'react-bootstrap'
import React,{useState} from 'react'



const CreateProfile = ({modal,setModal}) => {

  const [data,setData]=useState({
    image:"",
    links:[],
    name:"",
    email:"",
    mobile:"",
    technicalSkills:"",
    nonTechnicalSkills:"",
    tools:"",
    projects:[]
  })

  const handleClick=()=>{

    setModal(!modal);

  }

  return (
    <div className='position-fixed z-5 translate-middle bg-white shadow-lg top-50 start-50 rounded' style={{height:"600px",width:"800px"}}>
        <form  className='d-flex flex-row'>
            <div className='d-flex flex-column w-100'>
            <div className='border m-4  border-primary border-2 rounded'>
            <input className=' w-75 m-2  border border-2 border-dark rounded ps-4' placeholder="enter your image url"/>
            <input className=' w-75 m-2  border border-2 border-dark rounded ps-4' placeholder="enter twitter link"/>
            <input className=' w-75 m-2  border border-2 border-dark rounded ps-4' placeholder="enter linkedin link"/>
            <input className=' w-75 m-2  border border-2 border-dark rounded ps-4' placeholder="enter instagram  link"/>
            <input className=' w-75 m-2  border border-2 border-dark rounded ps-4' placeholder="enter leetcode link"/>
            </div>
            <div className="border m-4  border border-warning border-2 rounded">
            <input className=' w-75 m-2  border border-2 border-dark rounded ps-4' placeholder="enter your image url"/>
            <input className=' w-75 m-2  border border-2 border-dark rounded ps-4' placeholder="enter twitter link"/>
            <input className=' w-75 m-2  border border-2 border-dark rounded ps-4' placeholder="enter linkedin link"/>
            </div>
            </div>
            

            <div className='d-flex flex-column'>
            <div className="border m-4  border border-danger border-2 rounded">
            <input className='w-75 m-2  border border-2 border-dark rounded ps-4' placeholder="enter your tech stack"/>
            <input className='w-75 m-2  border border-2 border-dark rounded ps-4' placeholder="enter nontech skills"/>
            <input className='w-75 m-2  border border-2 border-dark rounded ps-4' placeholder="enter tools"/>
            </div>

            <div className="border m-4  border border-success border-2 rounded">
            <input className='w-75 m-2  border border-2 border-dark rounded ps-4' placeholder="enter your project1"/>
            <input className='w-75 m-2  border border-2 border-dark rounded ps-4' placeholder="enter your project2"/>
            <input className='w-75 m-2  border border-2 border-dark rounded ps-4' placeholder="enter your project3"/>
            </div>

            </div>

            <Button onClick={handleClick} variant="dark" className=' border position-fixed bottom-0 start-50 mb-5 me-5' >Submit</Button>
           
        </form>


    </div>
  )
}

export default CreateProfile