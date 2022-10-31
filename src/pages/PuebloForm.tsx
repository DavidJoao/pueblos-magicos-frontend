import axios from 'axios'
import React, { useState } from 'react'
import { IoHome } from 'react-icons/io5'
import { Link } from 'react-router-dom'



export default function PuebloForm() {
    const states = ['Aguascalientes', 'Baja California Sur', 'Baja California', 'Campeche', 'Chiapas', 'Chihuahua', 'Ciudad de Mexico', 'Coahuila', 'Colima', 'Durango', 'Guanajuato', 'Guerrero', 'Hidalgo', 'Jalisco', 'Mexico', 'Michoacan', 'Morelos', 'Nayarit', 'Nuevo Leon', 'Oaxaca', 'Puebla', 'Queretaro', 'Quintaran Roo', 'San Luis Potosi', 'Sinaloa', 'Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz', 'Yucatan', 'Zacatecas']

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
        console.log(form)
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
    <div className='h-full border border-black flex flex-col justify-center items-center min-h-screen w-full'>
        <div className='border border-slate-500 h-1/2 w-1/2 flex flex-col justify-center items-center shadow-xl bg-slate-300 rounded'>
            <form onSubmit={submitHandler} className='flex justift-center items-center flex-col'>
                <h4>Name:</h4>
                <input required className='p-1 rounded' placeholder='Name' value={form.name} onChange={(e) => {
                    changeHandler("name", e.target.value)
                }} />
                <h4>Description:</h4>
                <input required className='p-1 rounded' placeholder='Description' value={form.description} onChange={(e) => {
                    changeHandler("description", e.target.value)
                }} />
                <h4>Location:</h4>
                <div className='flex flex-row justify-evenly w-full'>
                    <select required className='p-1 rounded mr-2' onChange={(e) => {
                    changeHandler('state', e.target.value)
                }}>
                        {states.map((state) => {
                            return(
                                <option key={state} value={state}>{state}</option>
                            )
                        })}
                    </select>
                    <select required className='p-1 rounded ml-2' onChange={(e) => {
                        changeHandler('country', e.target.value)
                    }}>
                        <option value=''></option>
                        <option value='Mexico'>Mexico</option>
                    </select>
                </div>
                <h4>Images:</h4>
                <input required placeholder='Enter links separated by one space' className='p-1 rounded' onChange={ImagesHandler}/>
                <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 mt-2">Submit</button>
            </form>
        </div>
        <Link to='/' className="text-white mt-20 text-5xl"> <IoHome></IoHome> </Link>
    </div>
  )
}
