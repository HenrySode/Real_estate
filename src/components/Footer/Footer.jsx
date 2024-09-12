import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            {/* Left Side */}
            <div className="flexColStart f-left">
                {/* <img src="./logo2.png" alt="" srcset="" width={120}/> */}
                <h3>. RestNest</h3>
                <span className='secondaryText'>
                    Our vision is to make all people <br />
                    the best place to live for them
                </span>
            </div>
            <div className="flexColStart f-right">
                <span className='primaryText'>Information</span>
                <span className='secondaryText'>145 Ipuli Tabora, FL 4571 Tanzania </span>

                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
