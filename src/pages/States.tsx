import { useState, useEffect } from 'react'

function States() {

    const [pueblos, setPueblos] = useState<any[]>([])

    const states = ['', 'Aguascalientes', 'Baja California Sur', 'Baja California', 'Campeche', 'Chiapas', 'Chihuahua', 'Ciudad de Mexico', 'Coahuila', 'Colima', 'Durango', 'Guanajuato', 'Guerrero', 'Hidalgo', 'Jalisco', 'Mexico', 'Michoacan', 'Morelos', 'Nayarit', 'Nuevo Leon', 'Oaxaca', 'Puebla', 'Queretaro', 'Quintaran Roo', 'San Luis Potosi', 'Sinaloa', 'Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz', 'Yucatan', 'Zacatecas']
    useEffect(() => {
        fetch('http://localhost:8000/pueblos')
        .then(response => response.json())
        .then(response => {
        setPueblos(response)
        console.log(pueblos)
        })
    }, [])


  return (
    <div>
        {states.map((state) => {
            return(
                <div>
                    {state}
                </div>
            )
        })}
    </div>
  )
}

export default States
