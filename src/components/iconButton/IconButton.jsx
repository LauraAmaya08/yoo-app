import { Button } from "@material-tailwind/react";

export const IconButton = ({id,image,style}) => {
    return (
        <>
        <Button type="button" id={id} className={`${style} flex items-center bg-transparent shadow-none`}><img src={image} alt="icono"/></Button>
        </>
    )
}