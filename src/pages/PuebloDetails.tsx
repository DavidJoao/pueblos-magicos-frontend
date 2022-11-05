import React from 'react'
import { Modal } from 'react-bootstrap'

export const PuebloDetails = ( { pueblo, show, handleClose, colors }:any ) => {
  return (
    <Modal size="lg" show={show} onHide={handleClose} style={{overflow:'auto', height:'90%'}}>
      <Modal.Header className='flex flex-col' closeButton>
        <Modal.Title>{pueblo.name}, {pueblo.state}, {pueblo.country}</Modal.Title>
        <p className='text-black/10'>#{pueblo._id}</p>
      </Modal.Header>
      <Modal.Body className="flex flex-col justify-center items-center" >
        <img key={`${pueblo.id}1`} src={pueblo.images[0]} className="w-1/2 rounded-xl mb-2 shadow-xl" style={{border:'4px solid red'}}/>
        <p className="w-1/2 mt-4">{pueblo.description}</p>
        {pueblo.images.map((image:any) => {
            const random:number = Math.floor(Math.random() * colors.length)
            const cardBackground:String = colors[random]
            return(
                <img key={pueblo._id} src={image} className="w-1/2 hover:w-3/4 duration-500 mt-5 rounded-xl shadow-2xl" style={{border:`4px solid ${cardBackground}`}}/>
            )
        })}
      </Modal.Body>
      <Modal.Footer style={{position:'sticky'}}>
        <button onClick={handleClose}> Close </button>
      </Modal.Footer>
  </Modal>
  )
}

export default PuebloDetails