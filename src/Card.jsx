import React from 'react';
import { NavLink } from 'react-router-dom';
import imga from '../src/Image/1.jpg';

const Card = (props) => {
  return (
    <>
    <div class="container " style={{width: "18rem"}}>
      <div className="card mt-5 ml-2">
        <div className='m-1'>
  <img src={imga} class="card-img-top" alt="Login"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="/Contect" class="btn btn-primary">Go Contect</NavLink>
  </div>
  </div>
  </div>
  </div>

    </>
  )
}

export default Card;
