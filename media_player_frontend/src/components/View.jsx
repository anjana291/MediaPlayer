import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getUploadVideoApi } from '../services/allAPI'

function View({videoUploadStatus}) {
  //js code

  //state to hold the videos from backend
  const [video,setVideo] = useState([])

  const [deleteVideoStatus, setDeleteVideoStatus] = useState(false)

  const getVideo = async() => {
    const response=await getUploadVideoApi()
    // console.log(response.data);
    setVideo(response.data)
  }

  console.log(video);
  useEffect(()=>{
    getVideo()
    setDeleteVideoStatus(false)
  },[videoUploadStatus,deleteVideoStatus])


  return (
    <>
    <Row>
       {video?.length>0 ?   //checks length of video: if length is empty h5 is displayed and if lenght>0 each item is displayed,? is for checking content after the page loads bcoz it is asynchronous
       video?.map((item)=>(
       <Col sm={12} md={6} lg={4} xl={3}>
            <VideoCard displayVideo={item} setDeleteVideoStatus={setDeleteVideoStatus}/>
        </Col>
       ))

        :

        <h5 className='mt-5 text-warning'>No Video Uploaded Yet...</h5>}
    </Row>        
    </>
  )
}

export default View