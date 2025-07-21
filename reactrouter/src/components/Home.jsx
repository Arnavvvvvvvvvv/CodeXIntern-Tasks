import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate= useNavigate();
  function handleclick(){
    navigate('/about');
  }
  return (
    <div>
      HOME PAGE <br />
      <button onClick={handleclick}>
        Fly to About Page
      </button>
    </div>
  )
}

export default Home
