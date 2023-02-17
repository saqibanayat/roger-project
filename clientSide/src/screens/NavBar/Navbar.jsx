import React from 'react'
import './navbar.css';
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function Navbar() {
const {user}=useSelector(state=>state.auth)

const navigate=useNavigate()
  const click = (e) => {
    e.preventDefault()
    navigate('/')
  }
  return (
   <>
   <nav>
    <input id="responsive" type="checkbox"/>
    <label className="res_menu" htmlFor="responsive">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
    </label>
    
    <label className="logo">
      <div>
        <a href="/" onClick={click}>Spruce Cloud Inc</a>
        
        </div>  </label>

     <ul>
            
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li> 
            {user?.userName &&  <> <li><Link>logout</Link></li>  <li><b>{user.userName}</b></li></> }
            {!(user) && <> <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/login">login</Link></li></> }
            
           
            
          </ul>
      
</nav>
        
   </>
  )
}
