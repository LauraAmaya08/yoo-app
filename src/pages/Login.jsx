import {Link} from 'react-router-dom'
import {Size, SizeBox, Backgrounds} from '../styles/LoginAnRegister/styles'
import { Button1 } from '../components/button1/Button1'
import { Input } from '../components/Input/Input'
import { IconButton } from '../components/iconButton/IconButton'
import Logo from '../assets/img/background/logo.png'
import Logo2 from '../assets/img/background/logo__2_-removebg-preview.png'
import User from '../assets/img/icons/user.png'
import Back from '../assets/img/icons/back.png'
import Password from '../assets/img/icons/key.png'

export const Login = () => {
    return(
        <>
        <div className={`${Backgrounds.BACKGROUND}`}>
            <div className={`flex bg-[#F8F8FF] rounded-xl shadow-(0px_0px_50px_10_px_rgba(0,0,0,0.2) ${SizeBox.BOX_L}`}>
                <div className='flex flex-col w-full p-5 py-[20px] lg:py-[30px] lg:w-1/2'>
                    <section className='w-full flex justify-between px-[12px]'>
                        <div className=''>
                            <IconButton id='iconBack' image={Back} style='w-[3vh] w-[3vh] max-w-[30px] max-h-[30px]'/>
                        </div>
                        <div>
                            <p className={`${Size.LARGE} hover:text-[#0094ff]`}>
                                <Link to='/registrar'>¿Eres nuevo? Regístrate.</Link>
                            </p>
                        </div>
                    </section>
                    <section className='flex items-center justify-center w-full h-full'>
                        <form action="" className='flex flex-col relative items-center justify-center w-full space-y-8 lg:space-y-16'>
                            <div className='flex flex-col items-center justify-center'>
                                <h2 className={`${Size.EXTRALARGE}`}>Bienvenido a</h2>
                                <img src={Logo} alt="logo" className='h-[50px] md:h-[60px] lg:h-[4rem] xl:h-[5.5rem] max-w-full' />
                                <p className={`hidden md:flex w-5/6 ${Size.LARGE} mt-5 leading-7`}>Inicia Sesión y empieza a compartir.</p>
                            </div>

                            <section className='flex flex-col items-center justify-center w-full xl:px-[1.5vh] space-y-3'>
                            {Input('text','txtUser', 'Usuario', User)}
                            {Input('password','txtPassword', 'Contraseña', Password)}
                            </section>

                            <section className='flex flex-col-reverse items-center justify-center md:flex-row md:justify-between w-[90%] md:w-[72%] xl:px-[1.5vh] mt-10 xl:mt-20 space-y-reverse space-y-3 md:space-y-0 md:space-x-5'>
                            <Button1 nombre='Crear Cuenta' id='crearCuenta' type='link' link='/registrar' color='bg-[#1C1C1C]'></Button1>
                            <Button1 nombre='Iniciar Sesión' id='inicioSesion' type='submit' link='' color='bg-[#0047AB]'></Button1>
                            </section>
                        </form>
                    </section>
                </div>
                <div className={`hidden lg:flex flex-col lg:w-1/2 bg-black/90 bg-cover bg-center rounded-r xl:py-[30px] xl:px-[20px] text-white items-center justify-center`}>

                </div>
            </div>
        </div>
        </>
    )
}