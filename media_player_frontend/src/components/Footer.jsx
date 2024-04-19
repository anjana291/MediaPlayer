import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { faFacebook, faInstagram ,faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons'


function Footer() {
  return (
    <div className='row p-4 mt-md-5'>
      <div className="col-md-3">
        <h4 style={{fontSize:'30px'}} className='mb-3'><FontAwesomeIcon icon={faVideo} size='sm' className='text-warning me-2'/>Media Player</h4>
        <p style={{textAlign:'justify',fontSize:'20px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sunt nam veniam impedit, neque in tempora itaque dolorum quae voluptate placeat quia laudantium consequatur ut officiis, iusto incidunt similique pariatur.</p>
      </div>
      <div className="col-md-2">
        <h5 style={{fontSize:'25px'}}>Links</h5>
        <Link to={'/'}><p style={{fontSize:'20px'}}>Landing Page</p></Link>
        <Link to={'home'}><p style={{fontSize:'20px'}}>Home Page</p></Link>
        <Link to={'/watch-history'}><p style={{fontSize:'20px'}}>Watch History</p></Link>
      </div>
      <div className="col-md-3 pe-4">
        <h5 style={{fontSize:'25px'}}>Guides</h5>
        <p style={{fontSize:'20px'}}>React </p>
        <p style={{fontSize:'20px'}}>React Bootstrap</p>
        <p style={{fontSize:'20px'}}>BootsWatch</p>
        </div>    
      <div className="col-md-4">
        <h5 style={{fontSize:'25px'}}>Contact</h5>
        <div className="d-flex mt-3">
          <input type="text" placeholder='Email Id' className='form-control'/>
          <button className='btn btn-warning ms-2' >Subscribe</button>
        </div>
        <div className="d-flex justify-content-between mt-4">
        <FontAwesomeIcon icon={faInstagram} size='2xl'/>
        <FontAwesomeIcon icon={faFacebook} size='2xl'/>
        <FontAwesomeIcon icon={faTwitter} size='2xl'/>
        <FontAwesomeIcon icon={faLinkedin} size='2xl'/>
        </div>
      </div>

    </div>
  )
}

export default Footer