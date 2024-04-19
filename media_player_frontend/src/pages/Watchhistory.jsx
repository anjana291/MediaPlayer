import { faArrowLeft, faHouse,faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteaVideoHistoryApi, getAllVideoHistoryApi } from '../services/allAPI'

function Watchhistory() {
  const [videoHistory, setVideoHistory]=useState([])
  const [deletevideostatus, setdeletevideostatus] = useState(false)


  //function to get all video from backend
  const getAllVideo = async()=>{
    const response = await getAllVideoHistoryApi()
    console.log(response.data);

    setVideoHistory(response.data)
  }

  const handleDelete = async(id)=>{
    const response = await deleteaVideoHistoryApi(id)
    console.log(response);
    setdeletevideostatus(true)
  }

  console.log(videoHistory);

  useEffect(()=>{
    getAllVideo()
    setdeletevideostatus(false)
  },[deletevideostatus])

  return (
    <>
    <div className='d-flex align-items-center mx-4 mb-5 mt-5'>
      <h4>Watch History</h4>
      <Link to={'/home'} className='ms-auto' style={{textDecoration:'none'}}><h3><FontAwesomeIcon icon={faArrowLeft} size='xs' className=''/> <span id='back' style={{fontSize:'25px'}}>Back to Home</span><FontAwesomeIcon icon={faHouse} size='xs' className='ms-2 me-2'/></h3></Link>
    </div>      
    <div className='row mx-4 mt-5'>
      <div className="col-md-1"></div>
      <div className="col-md-10 p-4" style={{overflowX:'auto'}}>
        {videoHistory?.length>0?
        <table className='table' >
          <thead>
            <tr>
              <th>#</th>
              <th>CAPTION</th>
              <th>URL</th>
              <th>TIME STAMP</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            { videoHistory?.map((item,index)=>(
           <tr>
              <td>{index+1}</td>
              <td>{item?.caption}</td>
              <td><a href={item?.url} target='_blank'>{item?.url}</a></td>
              <td>{item?.timeStamp}</td>
              <td><FontAwesomeIcon icon={faTrash} className='btn btn-outline-danger'onClick={()=>{handleDelete(item?.id)}}/></td>
           </tr>
            ))}
          </tbody>
        </table>:
        <p className='text-warning mt-5 fs-5'>Watch history is clean....</p>
        }
      </div>
      <div className='col-md-1'></div>
    </div>
    </>
  )
}

export default Watchhistory