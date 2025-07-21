import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate= useNavigate();

  function handleclick(){
    navigate('/dashboard')
  }

  return (
    <div>
      About page <br />
      <button onClick={handleclick}>
        Climb to Dashboard
      </button>
    </div>
  )
}

export default About
