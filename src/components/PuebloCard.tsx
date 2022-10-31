import { useState } from "react";
import PuebloDetails from "../pages/PuebloDetails";

const PuebloCard = ( {pueblo, cardBackground}:any ) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const colors:Array<String> = ['#D72630', '#D7D52A', '#F28A17', '#07A499', '#FF7EA0', '#872E8C']

    return(
        <div className="w-full flex flex-col justift-center items-center">
            <div className="w-4/5 flex flex-col justify-center items-center m-3 p-2 rounded-lg shadow-xl border-4 border-slate-400" style={{backgroundColor:`${cardBackground}`}} onClick={handleShow}>
                <div key={pueblo._id} className='m-2 rounded-md w-full h-52 flex flex-col justify-center items-center shadow-2xl opacity-60 hover:opacity-100 duration-500 p-2' style={{background:`url('${pueblo.images[0]}')`, backgroundSize:'cover', backgroundPosition:'center'}}>
                <h1 className='text-5xl text-white font-bold'>{pueblo.name}</h1>
                </div>
            </div>
        <PuebloDetails pueblo={pueblo} show={show} colors={colors} handleClose={handleClose} />
        </div>
    )
}

export default PuebloCard