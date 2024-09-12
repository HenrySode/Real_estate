import React from 'react'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
import './Contact.css'

const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            {/* Left side */}
            <div className="flexColStart c-left">
                <span className='orangeText'>Our Contact</span>
                <span className='primaryText'>Easy to contact us</span>
                <span className='secondaryText'>We are 24/7 ready and available to help you, 
                        by providing the best services</span>

                
                <div className="flexColStart contactModes">
                    {/* first row */}
                    <div className="flexStart row">
                        <div className="flexColCenter modes">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Call</span>
                                    <span className='secondaryText'>+255 623 342 313</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Call Now
                            </div>
                        </div>

                        {/* second mode */}
                        <div className="flexColCenter modes">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Chat</span>
                                    <span className='secondaryText'>+255 623 342 313</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Chat Now
                            </div>
                        </div>
                    </div>
                    {/* Second row */}
                    <div className="flexStart row">
                        <div className="flexColCenter modes">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Video Call</span>
                                    <span className='secondaryText'>+255 623 342 313</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                              Video Call Now
                            </div>
                        </div>

                        {/* fourth mode */}
                        <div className="flexColCenter modes">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <HiChatBubbleBottomCenter size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Message</span>
                                    <span className='secondaryText'>+255 623 342 313</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Message Now
                            </div>
                        </div>
                    </div>

                   

                </div>
            </div>



            {/* Right side */}
            <div className="c-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="" srcset="" />
                </div>
            </div>

        </div>
    </section>
  )
}

export default Contact
