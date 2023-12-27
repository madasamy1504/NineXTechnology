// Import necessary libraries
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'; // Create a separate CSS file for custom styling
import logo from"../assets/logo.png";

// Functional component for the header with overlapping responsive navbar
const Header = () => {
  return (
 

<div className="container-fluid HeaderBgContainter p-0">
<nav className="navbar navbar-expand-lg " >
  <div className="container-fluid  ">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <a className="navbar-brand" href="#">
      <img src={logo} width="140" height="auto" alt=""/>
    </a>

    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0  justify-content-between" >
        <li className="nav-item">
          <a className="nav-link active  " aria-current="page" href="#">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">ABOUT&nbsp;US</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-disabled="true">OUR&nbsp;VISION</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-disabled="true">CLIENTS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-disabled="true">SERVICES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-disabled="true">PROJECTS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-disabled="true" >CAREERS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-disabled="true">CONTACT</a>
        </li>
      </ul>
     
    
    </div>
  </div>
</nav>

<div className="row "  id='titleContainer'>
   <div className=" col-sm-12">
        <div id='title'>Empower Your<br className='m-hide'/><span className='gradient'> Business</span> with<br className='m-hide'/><span className='gradient'> Technology</span></div>
        <div className='headerText1'>From Idea to Implementation - We Make IT Happen</div>
    </div>
</div>

<div className='btnConatainer'>
  <a href='#'><button className='btn btn-primary Headerbtn' >Learn More&nbsp;&#8599;</button></a>
  
</div>



</div>
  );
};

// Export the component
export default Header;
