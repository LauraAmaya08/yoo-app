import {Link} from 'react-router-dom'
import { useState } from "react";
import {Size, SizeBox, Backgrounds} from '../styles/LoginAnRegister/styles'
import { Button1 } from '../components/button1/Button1'
import { Input2 } from '../components/input2/Input2'
import { IconButton } from '../components/iconButton/IconButton'
import Logo from '../assets/img/background/logo.png'
import Nombre from '../assets/img/icons/id-card.png'
import Back from '../assets/img/icons/back.png'
import Password from '../assets/img/icons/key.png'
import Telefono from '../assets/img/icons/telephone.png'
import User from '../assets/img/icons/user.png'
import FechaNac from '../assets/img/icons/birthday-cake.png'
import Email from '../assets/img/icons/email.png'


export const Register = () => {
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [fechaNac, setFechaNac] = useState("");
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({ fechaNac: "", password: "" });

    const validarFechaNac = (date) => {
        const fechaNacimiento = new Date(date);
        const hoy = new Date();
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        const mesActual = hoy.getMonth();
        const mesNacimiento = fechaNacimiento.getMonth();
        const diaActual = hoy.getDate();
        const diaNacimiento = fechaNacimiento.getDate();
    
        if (mesNacimiento > mesActual || (mesNacimiento === mesActual && diaNacimiento > diaActual)) {
            edad--; 
        }
    
        return edad < 14 ? "Debes tener al menos 14 años." : "";
    };

    const validarPassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[%$;&.,#])[A-Za-z\d%$;&.,#]{8,12}$/;
        return regex.test(password)
        ? ""
        : "Debe tener entre 8 y 12 caracteres, incluir una mayúscula, una minúscula, un número y al menos un símbolo especial (%$;&.,#).";
    };

    const manejoFechaNac = (e) => {
        const value = e.target.value;
        setFechaNac(value);
        setErrors((prevErrors) => ({ ...prevErrors, fechaNac: validarFechaNac(value) }));
    };
    
    const manejoPassword = (e) => {
        const value = e.target.value;
        setPassword(value);
        setErrors((prevErrors) => ({ ...prevErrors, password: validarPassword(value) }));
    };

    return(
        <>
        <div className={`${Backgrounds.BACKGROUNDR}`}>
            <div className={`flex flex-col items-center justify-center bg-white rounded-2xl shadow-xl ${SizeBox.BOX_R}`}>
                <section className='w-full flex flex-col p-[12px]'>
                    <div className='py-[12px]'>
                        <Link to={'/'}>
                        <IconButton  id='iconBack' image={Back} style='w-[3vh] w-[3vh] max-w-[30px] max-h-[30px]'></IconButton>
                        </Link>
                    </div>
                    <section className='flex flex-col justify-center items-center'>
                        <h1 className={`text-center ${Size.EXTRALARGE} font-[Jost-Regular]`}>
                        Crear Cuenta
                        </h1>
                        <div className='w-[50%]'>
                            <img src={Logo} alt="Logo"/>
                        </div>
                    </section>
                    <section className='flex w-full overflow-auto scrollbar-none'>
                        <form className='flex flex-col w-full'>
                            <section className='flex w-full'>
                                <div className='relative w-full space-y-5 mx-5'>
                                    <div className='flex flex-col lg:flex-row justify-between space-y-5 lg:space-y-0'>
                                        <div className='w-[100%] lg:w-[45%]'>
                                            <Input2 type="text" id="txtNombre" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} img={Nombre}/>
                                        </div>
                                        <div className='w-[100%] lg:w-[45%]'>
                                            <Input2 type="tel" id="txtTelefono" placeholder="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} img={Telefono}/>
                                        </div>
                                    </div>
                                    <div className='flex flex-col lg:flex-row justify-between space-y-5 lg:space-y-0'>
                                        <div className='w-[100%] lg:w-[45%]'>
                                            <Input2 type="email" id="txtEmail" placeholder="Correo Electrónico" value={email} onChange={(e) => setEmail(e.target.value)} img={Email}/>
                                        </div>
                                        <div className='w-[100%] lg:w-[45%]'>
                                            <Input2 type="date" id="txtFechaNac" placeholder="Fecha de Nacimiento" value={fechaNac} onChange={manejoFechaNac} img={FechaNac}/>
                                            {errors.fechaNac && <p className="text-red-500 text-sm">{errors.fechaNac}</p>}
                                        </div>
                                    </div>
                                    <div className='flex flex-col lg:flex-row justify-between space-y-5 lg:space-y-0'>
                                        <div className='w-[100%] lg:w-[45%]'>
                                            <Input2 type="text" id="txtUser" placeholder="Nombre de Usuario" value={user} onChange={(e) => setUser(e.target.value)} img={User}/>
                                        </div>
                                        <div className='w-[100%] lg:w-[45%]'>
                                            <Input2 type="password" id="txtPassword" placeholder="Contraseña" value={password} onChange={manejoPassword} img={Password}/>
                                            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <div className='flex justify-center w-full mb-4 mt-9'>
                                <Button1 nombre='Crear Cuenta' id='crearCuenta' type='submit' link='' color='bg-[#1C1C1C]'></Button1>
                            </div>
                        </form>
                    </section>
                </section>
            </div>
        </div>
        </>
    )
}