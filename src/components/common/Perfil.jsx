import React from 'react'
import '../styles/perfil.css'

import iconVolver from '../../assets/icons/volver_icon.svg'
import iconUser from '../../assets/icons/user_icon.svg'
import espIcon from '../../assets/icons/esp_icon.svg'
import celularIcon from '../../assets/icons/celular_icon.svg'
import casaIcon from '../../assets/icons/casa_icon.svg'

import imgLogoRecabol from '../../assets/imgs/logo-recabol.png'

const Perfil = () => {
    return (
        <div className='main-perfil-empleado'>
            <div className='main-header'>
                <div className='header-ubicacion'>
                    <img src={iconVolver} alt="" />    
                    <p>PERFIL</p>
                    <img src={iconUser} alt="" />
                </div>
                <div className='logo-header-recabol'>
                    <img src={imgLogoRecabol} alt="" />
                </div>
            </div>
            <div className='img-empleado-nombre'>

            </div>
            <div className='descripcion-empleo'>

            </div>
            <div className='informacion-empleado'>

            </div>
        </div>
    )
}

export default Perfil
