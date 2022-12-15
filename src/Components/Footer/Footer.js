import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { FaFacebookSquare} from 'react-icons/fa';
import { BsInstagram} from 'react-icons/bs';
import { BsTwitter} from 'react-icons/bs';
import { BsYoutube} from 'react-icons/bs';

function Footer() {

  return (

<footer  className="bg-dark text-light mt-3">
<Container fluid >
    
   <Row className='text-center p-5'>
       <Col className='col-lg-3 col-md-4 col-sm-6 my-3'>
       <ul className="ft">
   <li><h6 className="fw-bold" style={{fontSize:"20px"}}>ABOUT</h6></li>
   <li>Contact Us</li>
   <li>About Us</li>
   <li>Careers</li>
   <li>Press Release</li>
   <li>Corporate Information</li>
       </ul>
        </Col>
      
        <Col className='col-lg-3 col-md-4 col-sm-6 my-3'>
        <ul className="ft">
    <li><h6 className="fw-bold" style={{fontSize:"20px"}}>HELP</h6></li>
    <li>Payments</li>
    <li>Shipping</li>
    <li>Cancellation  returns</li>
    <li>FAQ</li>
    <li>Report Infringment</li>
       </ul> 
        </Col>
    
        <Col className ='col-lg-3 col-md-4 col-sm-6 my-3'>
        <ul className="ft">
  <li><h6 className="fw-bold" style={{fontSize:"20px"}}>POLICY</h6></li>
<li>Return Policy</li>
<li>Terms Of Use</li>
<li>Security</li>
<li>Privacy</li>
<li>Sitemap</li>
    </ul>
        </Col>
   
     <Col className ='col-lg-3 col-md-4 col-sm-6 my-3'>
     <ul className="ft">
      <li><h6 className="fw-bold" style={{fontSize:"20px"}}>SOCIAL</h6></li> 
      <li> <FaFacebookSquare/>  Facebook</li>
      <li><BsInstagram/>  Instagram</li>
      <li><BsTwitter/>  Twitter</li>
      <li><BsYoutube/>  Youtube</li>
      </ul>
        </Col>
   </Row>
</Container>
</footer>
 
  )
}

export default Footer