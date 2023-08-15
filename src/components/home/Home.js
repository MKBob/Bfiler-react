import React from 'react';
import "./Home.css"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import VideoCallIcon from '@material-ui/icons/VideoCall';

export default function CenteredGrid() {

  return (
    <div>
    <div className='root'>
     <div className='home_border'>
      <p className='home_p'>Simplifying Taxes for <br/> <span className='home_text'>Individuals and Businesses</span></p>
     </div>
     {/* NAV BUTTONS */}
    <div className='home_btns'> 
    
    <button className='home-btn-one'>FREE CONSUKTATION  <ArrowForwardIcon  className='btn-icon'/></button>
    <button className='home-btn-one'>About Us <VideoCallIcon  className='btn-icon'/></button>
   
    </div>
    </div>
    
    </div>
  );
}
