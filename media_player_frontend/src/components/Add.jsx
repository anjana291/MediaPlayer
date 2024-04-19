import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { uploadVideoApi } from '../services/allAPI';

function Add({setVideoUploadStatus}) {
  const [show, setShow] = useState(false);
  //state to store video details
  const [video,setVideo]= useState({
    caption : '',
    imageUrl : '',
    embedLink : ''
  })
  console.log(video);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getEmbedlink=(e)=>{
    const text = e.target.value
    console.log(text);
    if(text.startsWith('https://youtu.be/')){
      // console.log(text.slice(-31,-20));
      const link = `https://www.youtube.com/embed/${text.slice(-31,-20)}`
      setVideo({...video,embedLink:link})
    }
    else{
      // console.log(text.slice(-11));
      const link = `https://www.youtube.com/embed/${text.slice(-11)}`
      setVideo({...video,embedLink:link})
    }
  }

  // function to upload video details
  const handleUpload = async() => {
    const {caption , imageUrl , embedLink} = video
    if(!caption || !imageUrl || !embedLink){
      toast.error('Please Fill the Form Completely')
    }
    else{
      const response = await uploadVideoApi(video)
      console.log(response);
      if(response.status>=200 && response.status<300){
        toast.success('Video Uploaded Successfully')
        setVideoUploadStatus(response.data)
        setVideo({
          caption : '',
          imageUrl : '',
          embedLink : ''
        })
        handleClose()
      }
      else{
        console.log(response);
        toast.error('Something Went Wrong')
      }
    }
  }

  return (
    <>
        <div>
            <h5>Upload New Video<FontAwesomeIcon icon={faCloudArrowUp} onClick={handleShow} className='ms-2' size='lg' style={{cursor:'pointer'}}/></h5>
    
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title><FontAwesomeIcon icon={faFilm} className='text-warning me-2' size='sm'/>Upload Videos</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Please fill the following details</p>
                <form action="" className='mt-3 border p-3 rounded'>
                    <div className="mb-3">
                        <input type="text" onChange={(e)=>setVideo({...video,caption:e.target.value})} placeholder='Enter Video Caption' className='form-control'/>
                    </div>
                    <div className="mb-3">
                        <input type="text" onChange={(e)=>setVideo({...video,imageUrl:e.target.value})} placeholder='Enter Image URL' className='form-control'/>
                    </div>
                    <div className="mb-1">
                        <input type="text" placeholder='Enter Youtube Video Link' className='form-control'
                        onChange={(e)=>getEmbedlink(e)}/>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="warning" onClick={handleUpload}>
                Upload
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <ToastContainer theme='light' position='top-center' autoClose='2000'/>
    </>
  )
}

export default Add