import { Link } from "react-router-dom"
import { GrConfigure } from 'react-icons/gr'

const Home = () => {
    return(
        <div className="min-h-screen flex flex-col items-center" style={{background:"url('https://media.istockphoto.com/vectors/creative-vector-seamless-pattern-vector-id842797588?k=20&m=842797588&s=612x612&w=0&h=bAhhqxtiO9P_br-d_gOKAc8Uac9NnbKBXnqBY9TWbQk=')"}}>
            <div className="h-full flex flex-col justify-center items-center m-auto w-1/2">
                <button className="bg-blue-500 hover:text-white text-white font-bold py-2 px-4 rounded mb-2 mt-52"> <Link to='/pueblos'>Start Exploring </Link></button>
            </div>
            <Link className="text-5xl m-3 p-2 rounded-xl shadow-xl bg-slate-200" style={{float:'right'}} to='/panel'> <GrConfigure /> </Link>
        </div>
    )
}

export default Home