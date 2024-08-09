import React, {useState} from 'react';
import "./navbarStyle.css";
import logo from '../logo1.png';
import {Link} from "react-router-dom"

export default function Navbar() {
  const [iconstate, setIconstate] = useState(true);
  const [logostate, setLogostate] = useState(true);

  return (
    <nav className='navbarItems'>
      <div className='nav-section-1'>
        <h1 className='navbar-logo'><span className='mobile-view'>Linktree</span><img src={logo} className='logo'></img>
        {/* { logostate ?  :} */}
        </h1>
        <ul className={iconstate ? "nav-menu-1 mobile-view" : "nav-menu-1 mobile-view active"}>
            <li><Link className='nav-links'>Templates</Link></li>
            <li><Link className='nav-links'>Marketplace</Link></li>
            <li><Link className='nav-links'>Discover</Link></li>
            <li><Link className='nav-links'>Pricing</Link></li>
            <li><Link className='nav-links'>Learn</Link></li>
        </ul>
      </div>
      <div>
      <ul className='nav-menu-2'>
            <li><Link to="/login" className='log-in'><span>Log in</span></Link></li>
            <li><Link to="/signup" className='sign-up'>Sign up free</Link></li>
        </ul>
      </div>
      <div className='menu-icons'>
        {
          iconstate ? <i class="fa-solid fa-bars" onClick={()=>setIconstate(!iconstate)}></i> : <i class="fa-solid fa-x" onClick={()=>setIconstate(!iconstate)}></i>
        }
        
      </div>
    </nav>
  )
}
