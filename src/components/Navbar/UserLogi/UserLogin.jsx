import React from 'react'
import { Link } from "react-router-dom";
import "./UserLogin.css"

export default function UserLogin() {
  return (
    <div className='userLoginNav'>
        <li className='registerStyle Li-Navbar'><Link className='linkNav' to={"/register"}>Register</Link></li>
        <li className='registerStyle Li-Navbar'><Link className='linkNav' to={"/login"}>Login</Link></li>
        <li className='registerStyle Li-Navbar'><Link className='linkNav' to={"/logout"}>LogOut</Link></li>
    </div>
  )
}
