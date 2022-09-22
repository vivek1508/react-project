import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const Navbar = () => {
  return (
    <>
    <div className="container">
          <div className="row">
                    <div className="col-10">
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand " href="#">DEMO</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="contents navbar-contents" >
      <ul className="navbar-nav" >
        <li className="nav-item">
          <NavLink activeClassName='red' className="nav-link " exact  to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='red' className="nav-link" exact to="/About">Abot</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='red' className="nav-link" exact to="/Contect">Contect</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='red' className="nav-link" exact to="/Servic">Servic</NavLink>
        </li>
        </ul>
    </div>
  </div>
</nav>
</div>
</div>
</div>
    </>
  )
}

export default Navbar;
