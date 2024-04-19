import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <Navbar className="bg-transparent border border-secondary">
        <Container>
          <Link to={'/'} style={{textDecoration:'none'}}>
            <Navbar.Brand>
            <FontAwesomeIcon icon={faVideo} className='text-warning me-2' beat size='lg'/>
            {' '}
              <span style={{color:'white',fontSize:'32px'}}>MediaPlayer</span>
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
  )
}

export default Header