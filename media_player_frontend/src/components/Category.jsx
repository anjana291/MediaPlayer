import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import VideoCard from './VideoCard';
import { addCategoryApi, deleteACategoryApi, getAllCategoryApi } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { all } from 'axios';

function Category() {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState('')
  const [allCategory, setAllCategory] = useState([])
  const [addCategoryStatus , setAddCategoryStatus] = useState(false)
  const [deleteCategoryStatus , setDeletCategoryStatus] = useState(false)


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(categoryName);
  //function to add category
  const handleAddCategory = async()=>{
    let reqBody = {
      category: categoryName,
      allVideo:[]
    }

    if(allCategory.length==0){
      const result = await addCategoryApi(reqBody)
      console.log(result);
      if(result.status>=200 && result.status<300){
         toast.success('Category Added Successfully')
         setCategoryName("")
         setAddCategoryStatus(true)
         handleClose()
     }
     else{
         toast.error('Something Went Wrong')
     }
    }
    else{
      const existingCategory = allCategory.find((item)=>item.category==categoryName)
      if(existingCategory){
        toast.warning('Category Already Exists')
      }
      else{
        const result = await addCategoryApi(reqBody)
      console.log(result);
      if(result.status>=200 && result.status<300){
         toast.success('Category Added Successfully')
         setCategoryName("")
         setAddCategoryStatus(true)
         handleClose()
     }
     else{
         toast.error('Something Went Wrong')
     }
      }
    }
    
    // const result = await addCategoryApi(reqBody)
    // console.log(result);
    // if(result.status>=200 && result.status<300){
    //     toast.success('Category Added Successfully')
    //     setCategoryName("")
    //     setAddCategoryStatus(true)
    //     handleClose()
    // }
    // else{
    //     toast.error('Something Went Wrong')
    // }
  }

  const getAllCategory = async() =>{
    const result = await getAllCategoryApi()
    setAllCategory(result.data);
  }

  //function to delete category
  const handleDelete = async(id) =>{
    const result = await deleteACategoryApi(id)
    console.log(result);
    if(result.status>=200 && result.status<300){
      setDeletCategoryStatus(true)
    }
    else{
      toast.error('Something Went Wrong')
    }
  }

  console.log(allCategory);

  useEffect(()=>{
    getAllCategory()
    setAddCategoryStatus(false)
    setDeletCategoryStatus(false)
  },[addCategoryStatus,deleteCategoryStatus])

  return (
    <>
      <div className='d-flex justify-content-center align-items-center mt-5 mt-md-0'>
        <button className='btn btn-warning w-100' onClick={handleShow}>Add New Category</button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title  style={{fontSize:'30px'}}><FontAwesomeIcon icon={faPen} size='sm'/>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='my-3 border rounded p-4'>
            <label htmlFor="cname" className='mb-3'>Category Name</label>
            <input type="text" name="" id="cname" placeholder='Enter Category name' className='form-control' onChange={(e)=>setCategoryName(e.target.value)}/>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={handleAddCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      {allCategory?.length>0 ?
      allCategory?.map((cat)=>(<div className="border border-secondary w-100 p-3 rounded mt-5">
      <div className="d-flex justify-content-between align-items-center">
        <p>{cat.category}</p>
        <button className='btn btn-danger' onClick={()=>{handleDelete(cat?.id)}}><FontAwesomeIcon icon={faTrash} /></button>
      </div>
      <Row>
      <Col sm={12}>
        
      </Col>
    </Row>        
    </div>))
      
      :
      <p className='text-warning mt-5'>No Category Added Yet</p>}
      
      <ToastContainer theme='light' position='top-center' autoClose='2000'/>

    </>
  )
}

export default Category