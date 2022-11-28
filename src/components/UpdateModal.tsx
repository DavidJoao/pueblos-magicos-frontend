import React from 'react'
import {Modal} from 'react-bootstrap'

const UpdateModal = ( {show, handleClose}: any ) => {
  return (
    <Modal size="lg" show={show} onHide={handleClose} style={{overflow:'auto', height:'90%'}}>
    <Modal.Header className='flex flex-col' closeButton>
      <Modal.Title>Update Form</Modal.Title>
      <p className='text-black/10'></p>
    </Modal.Header>
    <Modal.Body className="flex flex-col justify-center items-center" >
    </Modal.Body>
    <Modal.Footer>
    </Modal.Footer>
</Modal>
  )
}

export default UpdateModal