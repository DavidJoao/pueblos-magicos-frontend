import React, { useState } from "react"
import PuebloForm from "./PuebloForm";
import { IoHome } from 'react-icons/io5' 
import { Link } from "react-router-dom";

const Panel = () => {

    const [component, setComponent] = useState<any>()
    const [hidden, setHidden] = useState('')
    const [keyText, setKeyText] = useState('')

    const submitHandler = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (keyText == 'tinker') {
            setHidden('none')
            setComponent(<PuebloForm />)
        } else {
            alert('Wrong code')
        }
    } 

    return(
        <div className="min-h-screen bg-black flex flex-col justify-center items-center w-full">
            <div className="flex flex-col justify-center items-center w-full" style={{display:`${hidden}`}}>
                <h1 className="text-white">Enter key</h1>
                <form className="flex flex-col justify-center items-center w-1/2" onSubmit={submitHandler}>
                    <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg w-1/2 p-2.5 mt-5" onChange={(e) => {
                        setKeyText(e.target.value)
                    }}/>
                    <button className="border border-white bg-white p-2 rounded-xl mt-2 w-1/2">Submit</button>
                </form>
            </div>
            {component}
            <Link to='/' className="text-white mt-20 text-5xl"> <IoHome></IoHome> </Link>
        </div>
    )
}

export default Panel