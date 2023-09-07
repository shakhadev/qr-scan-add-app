import React from 'react'
import { useNavigate } from 'react-router-dom'
const TopBar = () => {
    const navigate =useNavigate()
    const handleexit =()=>{
        navigate("/scanner")
    }
  return (
    <div>
        <p>Topbar</p>
        <button onClick={handleexit}>exit</button>
    </div>
  )
}

export default TopBar