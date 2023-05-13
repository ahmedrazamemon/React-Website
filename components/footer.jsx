import React from "react";
import { CiFacebook } from "react-icons/ci";
import { Link } from "react-router-dom";
import { ImWhatsapp } from "react-icons/im";
import Card from 'react-bootstrap/Card';
function Footer(){

return(

    <>
    
    <Card className="footer" >
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
          <Link className="link" > <CiFacebook/>Facebook </Link>   
             <Link className="link"><ImWhatsapp/>Whatsapp </Link>  
             </p>
 <p>

 © WMA-75637 Ahmed Raza Memon

 </p>
        </blockquote>
      </Card.Body>
    </Card>
  
    
    </>
)



}export default Footer;