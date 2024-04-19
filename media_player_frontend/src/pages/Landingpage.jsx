import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landingpage() {
  return (
    <>
    <div className='row p-5 my-2'>
    <div className='col-md-1'></div>
      <div className='col-md-5'>
        <h4>Welcome to <span className='text-warning' style={{fontSize:'35px'}}>Media Player</span></h4>
        <p style={{textAlign:'justify',fontSize:'20px'}} className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime dolor commodi natus illo, alias nesciunt totam aliquam possimus esse eaque maiores inventore quae libero suscipit quos ipsa magni porro atque!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis quae, quaerat magni nulla repellat natus dolores quod totam excepturi, v
          eritatis fugit assumenda est sequi laborum eligendi aperiam atque deserunt voluptate?
        </p>
        <Link to={'/home'}><button className='btn btn-warning mt-2'>Get Started</button></Link>
      </div>
      <div className='col-md-1'></div>
      <div className='col-md-5 p-3 d-flex justify-content-center align-items-center'>
        <img src="https://i.gifer.com/embedded/download/7h5u.gif" alt="" className='w-75'/>
      </div>
    </div>   

   <div className='mb-5 mt-5 py-5'>
   <h4 className='my-5 text-center'>Features</h4>
      <Row className='mb-5 mt-5 pt-0 pt-md-4'>
        <Col md={1}></Col>
        <Col md={3} className='p-md-0'>
        <Card style={{ width: '100%' }} className='p-3'>
        <Card.Img variant="top" src="https://media1.tenor.com/m/b8o4QL3NxV4AAAAC/sound-wave-waves.gif"
        style={{width:'100%',height:'200px'}} />
        <Card.Body>
          <Card.Title>Managing Video</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col md={4} className='d-flex justify-content-center p-md-0'>
          <Card style={{ width: '80%' }} className='p-3'>
        <Card.Img variant="top" src="https://cdn.dribbble.com/users/1445486/screenshots/3856847/ondas-small.gif"
        style={{width:'100%',height:'200px'}}  />
        <Card.Body>
          <Card.Title>Categorized Video</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card></Col>
        <Col md={3} className='p-md-0'>
        <Card style={{ width: '100%' }} className='p-3'>
        <Card.Img variant="top" src="https://i.pinimg.com/originals/bc/57/43/bc5743245f004c7ea45cd8a71991c661.gif"
        style={{width:'100%',height:'200px'}}  />
        <Card.Body>
          <Card.Title>Watch History</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col md={1}></Col>
      </Row>
   </div>

   <div className='row pt-0 pt-md-3 pb-3'>
    <div className='col-md-1'></div>  
    <div className='col-md-10 border p-3 rounded border-2'>
      <Row>
        <Col md={6} className='p-3'>
          <h4 className='text-warning mb-3'>Simple Fast and Powerful</h4>
          <p style={{textAlign:'justify'}}><span className='fs-4'>Play EveryThing</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eum totam commodi, deleniti aspernatur debitis odit error quo ratione. </p>
          <p style={{textAlign:'justify'}} className='mt-3'><span className='fs-4'>Play EveryThing</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eum totam commodi, deleniti aspernatur debitis odit error quo ratione. </p>
          <p style={{textAlign:'justify'}} className='mt-3'><span className='fs-4'>Play EveryThing</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eum totam commodi, deleniti aspernatur debitis odit error quo ratione.!</p>
        </Col>
        <Col md={6} className='p-3'>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ErGHF-gijQE" title="The Romance Of Power Paandi - Venpani Malare (Official Video) | Power Paandi | Rajkiran |  Dhanush" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Col>
      </Row>
    </div>    
    <div className='col-md-1'></div>    

   </div>
    </>
  )
}

export default Landingpage