import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { deleteaVideoApi, addToHistory } from '../services/allAPI';


function VideoCard({displayVideo, setDeleteVideoStatus}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true);
    let caption = displayVideo?.caption 
    let url = displayVideo?.embedLink
    let time = new Date()
    let timeStamp = new Intl.DateTimeFormat('en-GB',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(time)

    console.log(caption,url,timeStamp);

    const reqBody = {
      caption,
      url,
      timeStamp
    }

    const response = await addToHistory(reqBody)
    console.log(response);
  }

  const handleDelete=async(id)=>{
    const response = await deleteaVideoApi(id)
    console.log(response);
    setDeleteVideoStatus(true)
  }

  return (
    <>
      <Card style={{ width: '100%' }} className='mt-3'>
      <Card.Img onClick={handleShow}  variant="top" src={displayVideo?.imageUrl}
      width={'100%'} height={'190px'} />
      <Card.Body className='d-flex justify-content-between'>
      <Card.Text>{displayVideo?.caption}</Card.Text>
      <Button variant="danger" onClick={()=>handleDelete(displayVideo?.id)}><FontAwesomeIcon icon={faTrash} /></Button>
      </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="369" src={`${displayVideo?.embedLink}?autoplay=1`} title="Periyone Video Song | The Goat Life | A.R Rahman | Blessy | Amala Paul" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Modal.Body>
      </Modal>
  </>
  )
}

export default VideoCard