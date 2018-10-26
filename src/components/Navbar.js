import React from 'react';

class Navbar extends React.Component{
  render () {
    return(
      <nav>
       <ul>
        <li><a href= "#about-me">Home</a></li>
        <li><a href= "#portfolio">About</a></li>
        <li><a href= "#resume">Resume</a></li>
        <li><a href= "#contact-me">Contact</a></li>
       </ul>
      </nav>
    )
  }
}

export default Navbar;
