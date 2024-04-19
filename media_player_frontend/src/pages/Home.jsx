import React, { useState } from 'react'
import Add from '../components/Add'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import View from '../components/View'
import Category from '../components/Category'
import { Link } from 'react-router-dom'


function Home() {
  const [videoUploadStatus,setVideoUploadStatus]=useState({})
  return (
    <>
      <div className='my-5 container d-flex'>
           <Add setVideoUploadStatus={setVideoUploadStatus}/>   
           {/* data shared by add comp: so state function is passed*/}
           <Link to={'/watch-history'} className='ms-auto'  style={{textDecoration:'none'}}><h5><span id='wh'>Watch History </span><FontAwesomeIcon icon={faClockRotateLeft} size='sm' className='ms-2'/> </h5></Link>        
      </div>

      <div className='row mt-5 p-4'> 
        <div className='col-md-9'>
          <h4>All Videos</h4>
          <View videoUploadStatus={videoUploadStatus}/>  
          {/* data received by view comp: so state is passed */}
        </div>
        <div className='col-md-3'>
          <Category/>
        </div>

      </div>
    </>
  )
}

export default Home