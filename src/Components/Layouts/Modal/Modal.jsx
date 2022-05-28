import React, {useState,useEffect} from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import './Modal.css';


// const[show,popup] = useState(false);
//   const modalopen = () => popup (true);
//   const modalclose = () => popup (false);







const City = ({show , setShow}) => {
  
  const closecity = () =>{
      setShow(false);
  }

      return (
          <div>

                {/* <button type="button" class="btn btn-primary" onClick={() => setShow(true)}>
                Launch demo modal
                </button> */}
              <div show={show} onClose={closecity} className={"modal fade" + (show ? " show d-block"  : " d-none")} tabIndex="-1" role="dialog" data-bs-backdrop="false">
                  <div className="modal-dialog" >
                      <div className="modal-content">
                          <div className="modal-header">
                              
                              {/* <button type="button" className="close" onClick={() => setShow(false)} >
                                  <span>&times;</span>
                              </button> */}
                          </div>
                          <div className="modal-body">
                            <form>
                                <h3 className='pickcity'>Pick a City
                                <button type="button" className="close"  onClick={() => closecity()} >
                                  <span className='closebtn'>&times;</span>
                                </button>
                                </h3>
                                <select className='Mcategory'>
                                            <option value="" disabled selected>City</option>
                                            <option>NOIDA</option>
                                            <option>GREATER NOIDA</option>
                                            <option>GHAZIABAD</option>
                                            <option>DEHRADUN</option>
                                            <option>BAREILY</option>
                                </select><br/>
                                <h3 className='topcities'>Top Cities</h3>
                                <div className='citylogosection'>
                                   
                                    <button className='citylogobtn'><img className='citylogo' src="https://i.imgur.com/rLSx5CZ.png"></img></button>
                                    <button className='citylogobtn'><img className='citylogo' src="https://i.imgur.com/urfy0uO.png"></img></button>
                                    <button className='citylogobtn'><img className='citylogo' src="https://i.imgur.com/kOvGEv1.png"></img></button>
                                    <button className='citylogobtn'><img className='citylogo' src="https://i.imgur.com/5OpwzSg.png"></img></button>
                                    <button className='citylogobtn'><img className='citylogo' src="https://i.imgur.com/Ov0nDuk.png"></img></button>
                                </div>
                                
                            </form>
                          </div>
                          <div className="modal-footer">
                                <h5 className="modal-title text-danger">
                                    <div className='footsection'>
                                    <div className='logosection'>
                                        <img src="https://i.imgur.com/mZN0MXK.png" className='Mlogo'/>
                                    </div>
                            
                                    <h3 className='Mtext'>Your City Partner</h3>
                                    </div>
                                </h5>
                                {/* <button type="button" className="btn btn-secondary" onClick={() => setShow(false)} >Close</button> */}
            
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      );
  
}

export default City;