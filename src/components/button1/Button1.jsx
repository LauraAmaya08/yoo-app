import {Button} from "@material-tailwind/react";
import {Link} from "react-router-dom"
import {Size} from "../../styles/LoginAnRegister/styles"

export function Button1({nombre,id,type,link,color}){
    if(type === "link"){
        return(
            <Link to={link} className="flex items-center justify-center w-full h-[40px] md:h-[38px] xl:h-[3.5rem] text-center mr-2">
                <Button id={id} className={`w-full h-full font-[Jost-Light] text-white ${color} hover:bg-gradient-to-bl rounded-full ${Size.LARGE} py-2 normal-case drop-shadow-md`}>{nombre}</Button>
            </Link>
        )
    } else {
        return(
            <Button type={type} id={id} className={`w-full h-[40px] md:h-[38px] xl:h-[3.5rem] text-center mr-2 font-[Jost-Light] text-white ${color} hover:bg-gradient-to-bl rounded-full ${Size.LARGE} py-2 normal-case drop-shadow-md`}>{nombre}</Button>
        )
    }
}