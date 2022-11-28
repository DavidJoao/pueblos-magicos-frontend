import { useEffect, useState } from 'react'
import PuebloCard from '../components/PuebloCard'

interface IPueblo {
  name: string,
  description: string,
  state: string,
  country: string,
  images: Array<String>
}

export const Pueblos = () => {
    const [pueblos, setPueblos] = useState<any[]>([])
    const [searchCharacters, setSearchCharacters] = useState<String>('')
    const colors:Array<String> = ['#D72630', '#D7D52A', '#F28A17', '#07A499', '#FF7EA0', '#872E8C']
    const states = ['Aguascalientes', 'Baja California Sur', 'Baja California', 'Campeche', 'Chiapas', 'Chihuahua', 'Ciudad de Mexico', 'Coahuila', 'Colima', 'Durango', 'Guanajuato', 'Guerrero', 'Hidalgo', 'Jalisco', 'Mexico', 'Michoacan', 'Morelos', 'Nayarit', 'Nuevo Leon', 'Oaxaca', 'Puebla', 'Queretaro', 'Quintaran Roo', 'San Luis Potosi', 'Sinaloa', 'Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz', 'Yucatan', 'Zacatecas']



  useEffect(() => {
    fetch('http://localhost:8000/pueblos')
    .then(response => response.json())
    .then(response => {
      setPueblos(response)
      console.log(pueblos)
    })
  }, [])
  
  return (
    <div className='border border-black h-auto flex flex-col justify-center items-center min-h-screen bg-slate-300'>
      <div className='flex justify-center'>
        <img className='rotate-5' src='https://www.pngall.com/wp-content/uploads/5/Mexican-Banner-PNG-Image.png' style={{width:'30%'}}/>
        <img className='rotate-5' src='https://www.pngall.com/wp-content/uploads/5/Mexican-Banner-PNG-Image.png' style={{width:'30%'}}/>
        <img className='rotate-5' src='https://www.pngall.com/wp-content/uploads/5/Mexican-Banner-PNG-Image.png' style={{width:'30%'}}/>
      </div>
      <div className='w-full flex flex-row justify-center items-center mt-5'>
        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg w-1/2 p-2.5" placeholder="Ex. Nochistlan" onChange={(e) => {
            setSearchCharacters(e.target.value)
        }} required />
      </div>
      {pueblos && pueblos.length > 0 ?
        pueblos.filter(pueblo => searchCharacters == '' || pueblo.name.toLowerCase().includes(searchCharacters.toLocaleLowerCase()))
        .map(pueblo => {
          const random:number = Math.floor(Math.random() * colors.length)
          const cardBackground:String = colors[random]
          return(
            <PuebloCard pueblo={pueblo} key={pueblo._id} cardBackground={cardBackground} />
          )
        })
      :
      <div>No results</div>}
    </div>
  )
}

export default Pueblos
