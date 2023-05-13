import {Component} from "react";
import Navbar from "./navbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Gallery extends Component{
  constructor(){
    super()
    this.state={
      array : [],
      call : 0

    }
  }

  //api call 
  async componentDidMount(){
   
    //life cycle
    await fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json1)=>
  {
    console.log(json1)
    this.setState({
      array :json1
    })
    console.log("asjdhjashdjhj")
  
  });
  }

  

  render(){
    const {array,call} = this.state //destructing
    return(
      <Container style={{backgroundColor:'#0000'}}>
       <Row>
        <Col className="text-center" lg={12} md={6} sm={6} xs={12}>
     
        </Col>
      
       </Row>
       <Row>
        
        {
          array.length==0 ? 
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="" />
          :
          array.map((v,i)=>{
            return(
                
              <Col lg={4} key={i} className="mt-4">
              <Card  style={{height:380}}>
              <Card.Img variant="top" src={v.image} style={{width:200,height:300,objectFit:"cover",textAlign:"center",display:"block",margin:"auto"}} />
              <Card.Body>
              </Card.Body>
            </Card>
            </Col>
            )
          })
        }
       </Row>
  
 
      
      </Container>
    )
  }

}

export default Gallery;