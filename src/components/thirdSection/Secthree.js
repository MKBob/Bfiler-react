import React from 'react'
import './Secthree.css'
function thirdSection() {
    const data = [
        {
            thirdImage: "./Assets/icon2.png",
            thirdHeading: "Savings on Tax",
            thirdPara:
            "Gain maximum returns on unclaimed tax credits and return on investments. Fine-tune your utility and property taxes.",
        },
        {
            thirdImage: "./Assets/icon3.png",
            thirdHeading: "Minimize Withholding Tax",
            thirdPara:
            "Being a filer has its perks in Withholding Tax deduction. Withholding Tax is deducted at a higher rate by banks, suppliers etc. for non-filers.",
        },
        {
            thirdImage: "./Assets/tax.png",
            thirdHeading: "Savings on Tax",
            thirdPara:
            "Avoid prosecution and penalties from the FBR for not filing on your tax return.",
        },
       
      ];
  return (
    
       <div className='secthree-main'>
      <div className="third-container">
      <div className='main-div'>
      <p className='secthree-heading'>Why Become An <br/> <span className='secthree-span'>Active Tax Filer?</span></p>
      <p className='hedind-para'>ActiveFiler Is Your Trusted Source for Personal and Business <br/> Tax Preparation.</p>
     </div>
        <div className="third_section">
          {data.map((e) => {
            return (
              <div className="sec-three-content">
                <div className="sec-third-img">
                <img className="third-img" src={e.thirdImage} alt="" />
                </div>
              <div>
              <h1>{e.thirdHeading}</h1>
                <p>{e.thirdPara}</p>
              </div>
              
              </div>
            );
          })}
        </div>
      </div>
      <div className='email-secton'>
        <div className='third-sec-btn'>
          <button className='btn-one'>Individual</button>
          <button className='btn-two'>Business</button>
        </div>
        <p className='email-heading'>Get Quick Response <br/> <span className='email-span'>Request a Call Back</span></p>
        <div className='email-type'>
          <input type="name" placeholder='your name' />
          <input type="email" placeholder='your email' />
          <input type="phone" placeholder='your phone' />
          <input type="message" placeholder='your message' />
          <button className='req-btn'>Send Request</button>
        </div>
      </div>
    </div>
   
  )
}

export default thirdSection
