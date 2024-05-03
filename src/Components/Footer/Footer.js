import React from 'react'
import"./Footer.css"
import { BsFacebook, BsGlobe2, BsInstagram } from "react-icons/bs"
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer-main'>
        <div className='row row-cols-1 row-cols-lg-5 '>
           <div className='col m-1'>
           <h3 className='footer-heading'>IAS SBC CEC </h3>
            <h6><a href='/' className='nav-link'>HOME</a></h6>
            <h6><a href='/about' className='nav-link'>ABOUT</a></h6>
            <h6><a href='/execom' className='nav-link'>EXECOM</a></h6>
           </div>
           <div className='col m-1'>
           <h3 className='footer-heading'>ABOUT</h3>
            <h6><a href='/about' className='nav-link'>IEEE IAS</a></h6>
            <h6><a href='/awards' className='nav-link'>ACHIEVEMENTS</a></h6>
            <h6><a href='/awards' className='nav-link'>IEEE SBC</a></h6>
            
           </div>
           <div className='col m-1'>
           <h3 className='footer-heading'>ENQUIRY</h3>
            <h6><a href='/contacts' className='nav-link'>CONTACT US</a></h6>
            <h6><a href="mailto:cecieeeofficial@gmail.com" className='nav-link'>WRITE A MAIL</a></h6>
            <h6><a href='https://www.google.com/maps/place/College+of+Engineering+Chengannur/@9.317325,76.617486,16z/data=!4m6!3m5!1s0x3b0622ea027eb08f:0x41105b207db821c6!8m2!3d9.3173253!4d76.6174856!16zL20vMDhxODg3?hl=en&entry=ttu' className='nav-link'>LOCATION</a></h6>
           </div>

           <div className='col m-1'>
        <div className='bottom1'>
        <div className='bot1 nav-link'><a href="https://www.instagram.com/ieee_sb_cec/"><BsInstagram/></a></div>
        <div className='bot1 nav-link'><a href="https://www.facebook.com/IEEECEC/"><BsFacebook/></a></div> 
        <div className='bot1 nav-link'><a href="https://www.linkedin.com/company/cecieee/"><FaLinkedinIn/></a></div> 
        <div className='bot1 nav-link'><a href="https://cecieee.org/"><BsGlobe2/></a></div>  
        <div className='botline1'>@Ieeesbcec</div>
        </div>
      </div>
    </div>
 </div>
            
    

   
  )
}

export default Footer
