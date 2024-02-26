import React from 'react'
import './App.css'
import './index.css'
import Image1 from './Components/Image1'
import Image2 from './Components/Image2'
import Image3 from './Components/Image3'
import scenary from './assets/images/scenary.jpg'
import mountain from './assets/images/mountain.jpg'

import { Container, Nav, Navbar,Button } from 'react-bootstrap'

function App() {
  
  const handleNextClick = () => {
    const items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0].cloneNode(true));
    items[0].remove();
  }

  const handlePrevClick = () => {
    const items = document.querySelectorAll('.item');
    const lastItem = items[items.length - 1];
    document.querySelector('.slide').prepend(lastItem.cloneNode(true));
    lastItem.remove();
  }

  return (
    <>
    
      <div className="container container1">
        <div className="slide">
          <div className="item" style={{backgroundImage: 'url("https://i.ibb.co/qCkd9jS/img1.jpg")'}}>
            <div className="content">
              <div className="name">Switzerland</div>
              <div className="des">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
              <button>See More</button>
            </div>
          </div>
          <div className="item" style={{backgroundImage: 'url("https://i.ibb.co/jrRb11q/img2.jpg")'}}>
            <div className="content">
            
              <div className="name">Finland</div>
              <div className="des">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
              <button>See More</button>
            </div>
          </div>
          <div className="item" style={{backgroundImage: 'url("https://i.ibb.co/NSwVv8D/img3.jpg")'}}>
            <div className="content">
              <div className="name">Iceland</div>
              <div className="des">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
              <button>See More</button>
            </div>
          </div>
          <div className="item" style={{backgroundImage: 'url("https://i.ibb.co/Bq4Q0M8/img4.jpg")'}}>
            <div className="content">
              <div className="name">Australia</div>
              <div className="des">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
              <button>See More</button>
            </div>
          </div>
          <div className="item" style={{backgroundImage: 'url("https://i.ibb.co/jTQfmTq/img5.jpg")'}}>
            <div className="content">
              <div className="name">Netherland</div>
              <div className="des">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
              <button>See More</button>
            </div>
          </div>
          <div className="item" style={{backgroundImage: 'url("https://i.ibb.co/RNkk6L0/img6.jpg")'}}>
            <div className="content">
              <div className="name">Ireland</div>
              <div className="des">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
              <button>See More</button>
            </div>
          </div>
        </div>

        <div className="button">
          <button className='prev' onClick={handlePrevClick}><i className="fa-solid fa-arrow-left"></i></button>
          <button className='next' onClick={handleNextClick}><i className="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
      <Navbar className="navbar ">
      <Container>
        <Navbar.Brand href="#home" style={{color: 'white',fontFamily: '"Libre Baskerville", serif' ,textDecoration: 'none',marginLeft: '50px'}}>Explore World</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-auto">
            <Nav.Link href="#home" style={{color: 'white',fontFamily: '"Libre Baskerville", serif'}}>Home</Nav.Link>
            <Nav.Link href="#link" style={{color: 'white',fontFamily: '"Libre Baskerville", serif'}}>Places</Nav.Link>
            <Nav.Link href="#link" style={{color: 'white',fontFamily: '"Libre Baskerville", serif'}}>Culture</Nav.Link>
            <Nav.Link href="#link" style={{color: 'white',fontFamily: '"Libre Baskerville", serif'}}>Arts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='parallaxBox'>
      <Image1 />
      <div className='row d-flex justify-content-center align-items-center' style={{marginTop: '100px',marginBottom: '-400px'}}>
      <div className="col-lg-1"></div>
        <div className="col-lg-4 ">
          <h3 style={{textAlign: 'justify',color: 'grey'}}>A Unique Adventure</h3><br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis maxime fugit dolorum? Impedit nobis qui atque possimus, iusto quidem optio asperiores explicabo odit, perspiciatis quisquam alias?</p>
          <Button variant="info">Read More</Button>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-4">
          <img style={{height: '300px',width: '100%',borderRadius: '50px'}} src={mountain} alt="" />
        </div>
        <div className="col-lg-1"></div>
      </div>
      <Image2 />
      <div className='row d-flex justify-content-center align-items-center' style={{marginTop: '100px',marginBottom: '-400px'}}>
      <div className="col-lg-1"></div>
      <div className="col-lg-4">
          <img style={{height: '300px',width: '100%',borderRadius: '50px'}} src={scenary} alt="" />
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-4 ">
          <h3 style={{textAlign: 'justify',color: 'grey'}}>Discover New Horizons</h3><br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis maxime fugit dolorum? Impedit nobis qui atque possimus, iusto quidem optio asperiores explicabo odit, perspiciatis quisquam alias?</p>
          <Button variant="info">Get In Touch</Button>
        </div>
        <div className="col-lg-1"></div>
      </div>
      <Image3 />
    </div>
    </>
  )
}

export default App
