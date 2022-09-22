import React from 'react';

import {NavLink} from 'react-router-dom';

const Com = (props) => {
  return (
    <>
             <div className="container">
                                        <div className="row">
                                                  <div className="col-12 mx-auto">
                                                    <div className="row  d-flex align-items-center">
                                                            <div className='col-md-6 pt-5 mt-5 order-2 order-lg-1 '>
                                                          <h1  > {props.name} </h1>
                                                          <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                          <div className="mt-5">
                                                            <NavLink
                                                            to="/About"  className='btn-get-started'>{props.Start}</NavLink>
                                                            
                                                          </div>
                                                          </div>
                                                          <div className="col-2 mt-5 order-1 order-lg-2 ">
                                                            <img src={props.image} className='img'  alt="LODING" />
                                                          </div>
                                                            </div>
                                                  </div>
                                        </div>
                              </div>
    </>
  )
}

export default Com;
