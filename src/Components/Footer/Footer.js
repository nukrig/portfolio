import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'

function Footer(){
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaHome size={20} style={{color:'white',marginRight:'1rem'}} />
                        <div>
                            <p> Georgia, Tbilisi</p>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{color:'white',marginRight:'1rem'}} />
                        <a href={`tel:${+995551116540}`}>551 11 65 40</a>
                        </h4>
                    </div>
                    <div className='email'>
                        <h4><FaMailBulk size={17} style={{color:'white',marginRight:'0.9rem'}} />
                        <a href={`mailto:${'nukrigegelashvili3@gmail.com'}`}>nukrigegelashvili3@gmail.com</a>
                        </h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>About me</h4>
                    <p>I am a punctual and motivated individual who is able to work in a busy environment.
                         I’m willing to learn and develop new skills. I am a good team worker and am able to 
                         take instructions from all levels and Build-up good working relationships with all colleagues.
                          I am able to motivate and direct my talents and skills to meet objectives.
                    </p>
                    <div className='social'>
                        <a href='https://www.facebook.com/nukri.gegelashvili/' target='blank'>
                            <FaFacebook size={30} style={{color:'white',marginRight:'1rem'}} className='pointer' />
                        </a>
                        <a href='https://instagram.com/nukri.g?igshid=YmMyMTA2M2Y=' target='blank'>
                            <FaInstagram size={30} style={{color:'white',marginRight:'1rem'}} className='pointer'  />
                        </a>
                        <a href='https://www.linkedin.com/in/nukri-gegelashvili-273505225' target='blank'>
                            <FaLinkedin size={30} style={{color:'white',marginRight:'1rem'}} className='pointer'  />
                        </a>
                        <a href='https://github.com/nukrig/' target='blank'>
                            <FaGithub size={30} style={{color:'white',marginRight:'1rem'}} className='pointer'  />
                        </a>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer