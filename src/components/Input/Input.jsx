import { Size } from "../../styles/LoginAnRegister/styles";

export function Input(type,id,placeholder,img){
    return(
        <>
        <div className="flex flex-col items-center w-[90%] xl:w-[75%] md:w-[70%]">
            <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-[20px] xl:pl-[1.5rem] pointer-events-none">
                    <img src={img} alt="icono" className="relative h-[1.5rem] w-[1.5rem] md:h-[20px]  md:w-[20px] xl:w-[1.6rem] xl:h-[1.6rem]"/>
                </div>
                <input type={type} required id={id} className={`h-[40px] md:h-[3.2rem] lg:h-[3.8rem] bg-[#fafaff] border border-gray-300 text-gray-500 ${Size.LARGE} rounded-full block w-full pl-[4rem] md:pl-[50px] xl:pl-[4rem] px-5`} placeholder= {placeholder}/>
            </div>
        </div>
        </>
    )
}