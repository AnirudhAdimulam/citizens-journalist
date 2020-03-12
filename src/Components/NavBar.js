import React from 'react';
import "./NavBar.css";
import {Link } from 'react-router-dom';

const NavBar = () =>{
    return(
<nav class="topnav" >
  <ul>
    <Link to ="/home">
    <li>Home</li>
    </Link>
    <Link to ="/politics">
    <li>Politics</li>
    </Link>
    <Link to ="/business">
    <li>Business</li>
    </Link>
    <Link to ="/Science">
    <li>Science</li>
    </Link>
    <Link to ="/Sports">
    <li>Sports</li>
    </Link>
    <Link to ="/Technology">
    <li>Technology</li>
    </Link>
    <Link to ="/Events">
    <li>Events</li>
    </Link>

    <div class=  "search">   <input type="text" placeholder="Search.." name="search"/>
  
  </div>
 
  
  </ul>
</nav>
    )
}
export default NavBar;
//class="active"

//<a  href="home">Home</a>
  //<a href="Politics">Politics</a>
  //<a href="Business">Business</a>
  //<a href="Science">Science</a>
  //<a href="Sports">Sports</a>
  //<a href="technology">Technology</a>
  //<a href="Events">Events</a>