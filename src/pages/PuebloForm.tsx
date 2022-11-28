import axios from 'axios'
import React, { useState } from 'react'


export default function PuebloForm() {
    const states = ['', 'Aguascalientes', 'Baja California Sur', 'Baja California', 'Campeche', 'Chiapas', 'Chihuahua', 'Ciudad de Mexico', 'Coahuila', 'Colima', 'Durango', 'Guanajuato', 'Guerrero', 'Hidalgo', 'Jalisco', 'Mexico', 'Michoacan', 'Morelos', 'Nayarit', 'Nuevo Leon', 'Oaxaca', 'Puebla', 'Queretaro', 'Quintaran Roo', 'San Luis Potosi', 'Sinaloa', 'Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz', 'Yucatan', 'Zacatecas']

    type DeleteForm = {
        _id: string
    }

    let intialDelete = {
        _id: ''
    }

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
    const [puebloId, setPuebloId] = useState('')

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

    const handleDelete = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        axios.delete(`http://localhost:8000/pueblos/${puebloId}`)
        setPuebloId('')
    }

    const handleUpdate = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        //Axios call to update pueblo
    }
  return (
        <div className='border border-slate-500 h-1/2 w-1/2 flex flex-col justify-center items-center shadow-xl bg-slate-300 rounded'>
            <h1 className='p-2 border-b-[1px] border-gray-400 w-1/2 text-center'>Create Pueblo</h1>
            <form onSubmit={submitHandler} className='flex justift-center items-center flex-col border-b-[1px] border-gray-400 w-1/2 mb-3'>
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
                <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 mt-2">SUBMIT</button>
            </form>

            <form onSubmit={handleDelete} className='flex flex-col justify-center items-center mb-2 w-full'>
                <h1 className='border-b-[1px] border-gray-400 w-1/2 text-center pb-3 mb-2'>Delete Pueblo</h1>
                <h1>Enter pueblo ID</h1>
                <input className='p-1 rounded mt-2' placeholder="Ex. 1ac2tv56723ds" value={puebloId} onChange={(e) => {
                    setPuebloId(e.target.value)
                    console.log(puebloId)
                    }} />
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 mt-2' type='submit'>DELETE</button>
            </form>
            <form className='w-full flex flex-col items-center p-2' onSubmit={handleUpdate}>
                <h1 className='border-t-[1px] border-b-[1px] border-gray-400 p-3 w-1/2 text-center'>Update Pueblo</h1>
                <p>Enter pueblo ID</p>
                <input className='p-1 rounded'></input>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 mt-2'>UPDATE</button>
            </form>
    </div>
  )
}
