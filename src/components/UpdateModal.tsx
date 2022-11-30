import React from 'react'
import {Modal} from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'

const UpdateModal = ( {show, handleClose}: any ) => {

  const states = ['', 'Aguascalientes', 'Baja California Sur', 'Baja California', 'Campeche', 'Chiapas', 'Chihuahua', 'Ciudad de Mexico', 'Coahuila', 'Colima', 'Durango', 'Guanajuato', 'Guerrero', 'Hidalgo', 'Jalisco', 'Mexico', 'Michoacan', 'Morelos', 'Nayarit', 'Nuevo Leon', 'Oaxaca', 'Puebla', 'Queretaro', 'Quintaran Roo', 'San Luis Potosi', 'Sinaloa', 'Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz', 'Yucatan', 'Zacatecas']

  type Pueblo = {
      name: string,
      description: string,
      state: string,
      country: string,
      images: Array<String>
  }

  let initialState: Pueblo = {
      name: '',
      description:'',
      state: '',
      country: '',
      images: []
  }

  const [form, setForm] = useState(initialState)

  const changeHandler = <P extends keyof Pueblo>(prop: keyof Pueblo, value: Pueblo[P]) => {
    setForm({...form, [prop]: value})
}

const ImagesHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    let text = e.target.value;
    let textArray = text.split(' ')
    form.images = textArray
    console.log(form)
}

const submitHandler = (e:React.ChangeEvent<HTMLFormElement>) => {
  e.preventDefault()
  axios.post('http://localhost:8000/pueblos', form)
  setForm(initialState)
}

  return (
    <Modal size="lg" show={show} onHide={handleClose} style={{overflow:'auto', height:'90%'}}>
    <Modal.Header className='flex flex-col' closeButton>
      <Modal.Title>Update Form</Modal.Title>
      <p className='text-black/10'></p>
    </Modal.Header>
    <Modal.Body className="flex flex-col justify-center items-center" >
      <form onSubmit={submitHandler} className='flex justift-center items-center flex-col border-b-[1px] border-gray-400 w-1/2 mb-3'>
                  <h4>Name:</h4>
                  <input required className='p-1 rounded border' placeholder='Name' value={form.name} onChange={(e) => {
                      changeHandler("name", e.target.value)
                  }} />
                  <h4>Description:</h4>
                  <input required className='p-1 rounded border' placeholder='Description' value={form.description} onChange={(e) => {
                      changeHandler("description", e.target.value)
                  }} />
                  <h4>Location:</h4>
                  <div className='flex flex-row justify-evenly w-full'>
                      <select required className='p-1 rounded mr-2 border' onChange={(e) => {
                      changeHandler('state', e.target.value)
                  }}>
                          {states.map((state) => {
                              return(
                                  <option key={state} value={state}>{state}</option>
                              )
                          })}
                      </select>
                      <select required className='p-1 rounded ml-2 border' onChange={(e) => {
                          changeHandler('country', e.target.value)
                      }}>
                          <option value=''></option>
                          <option value='Mexico'>Mexico</option>
                      </select>
                  </div>
                  <h4>Images:</h4>
                  <input required placeholder='Enter links separated by one space' className='p-1 rounded border' onChange={ImagesHandler}/>
                  <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 mt-2'>UPDATE</button>
              </form>
    </Modal.Body>
</Modal>
  )
}

export default UpdateModal