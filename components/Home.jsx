import React from "react";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import image1 from './assets/1.jpg'
import image2 from './assets/2.jpg'
import image3 from './assets/3.jpg'
// import MyNav from "./MyNav";
import { Link } from "react-router-dom";
import Example from "./slider";
// import "../css/Home.css";
function Home(){

  return(
<>
<Example/>

<div>
        <div className="container " >
        </div>
      </div>
      <Container fluid className="px-5 ">
      <div className="row row-col-2 row-colsm-2 row-cols-md-3 row-cols-lg-4 g-3 d-flex justify-content-center my-5">
          <div className="col">
            <div className="card h-30" >
              <div className="card-body text-center">
                <a
                  className="text-decoration-none"
                  // href="./products/trademanagementerp.html"
                >
                  <i className="fa-solid fa-trademark w-100 pl-5 fs-3 text-primary mb-2"></i>
                  
                  
                  <Card  style={{ width: '18rem'}}>
    
      <Card.Body>
    
        <Card.Text>
    
<img src={image1} alt="" />    
        </Card.Text>
    
      </Card.Body>
    </Card>
                          </a>
              </div>
            </div>
          </div>
          <div className="card h-30">
              <div className="card-body text-center">
                <a
                  className="text-decoration-none"
                  // href="./products/trademanagementerp.html"
                >
                  <i className="fa-solid fa-trademark w-100 pl-5 fs-3 text-primary mb-2"></i>
                  
                  
                  <Card style={{ width: '18rem'}}>

      <Card.Body>

        <Card.Text>

<img src={image2} alt="" style={{width:140}}/>    
        </Card.Text>

      </Card.Body>
    </Card>
                          </a>
              </div>
            </div>
            <div className="card h-30">
              <div className="card-body text-center">
                <a
                  className="text-decoration-none"
                
                >
                  <i className="fa-solid fa-trademark w-100 fs-3  text-primary mb-2"></i>
                  
                  
                  <Card style={{ width: '18rem'  }}>
     
      <Card.Body>
             <Card.Text>
     
<img src={image3} alt="" />    
             </Card.Text>
     
      </Card.Body>
    </Card>
                          </a>
              </div>
            </div>

</div>
</Container>

</>




  )


}export default Home;