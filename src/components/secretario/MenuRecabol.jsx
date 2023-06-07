import React from 'react'
import '../styles/menuRecabol.css'

import iconConf from '../../assets/icons/conf_icon.svg'
import iconRegistro from '../../assets/icons/registro_icon.svg'
import iconLista from '../../assets/icons/lista_icon.svg'
import iconNota from '../../assets/icons/nota_icon.svg'
import iconDeposito from '../../assets/icons/deposito_icon.svg'
import iconMaterial from '../../assets/icons/material_icon.svg'
import iconFinSesion from '../../assets/icons/fin_sesion_icon.svg'

import imgSecretario from '../../assets/imgs/img_secretario.jpg'
import imgOperario from '../../assets/imgs/img_operario.jpg'
import imgRecolector from '../../assets/imgs/img_recolector.jpg'
import imgSupervisor from '../../assets/imgs/img_supervisor.jpg'

const MenuRecabol = ({ tipoEmpleado }) => {
    let imgTipoEmpleado;
    let listaOpciones;
    switch (tipoEmpleado) {
        case 'secretario':
            imgTipoEmpleado = <img src={imgSecretario} alt="" className='img-tipo-empleado'/>;
            listaOpciones = <div className='lista-menu-recabol'>
                <button className='boton-lista-menu'><img src={iconRegistro} alt="" />Nuevo Registro</button>
                <button className='boton-lista-menu'><img src={iconLista} alt="" />Lista de Trabajos</button>
                <button className='boton-lista-menu'><img src={iconNota} alt="" />Notas de Entrega</button>
            </div>;
            break;
        case 'operario':
            imgTipoEmpleado = <img src={imgOperario} alt="" className='img-tipo-empleado'/>;
            listaOpciones = <div className='lista-menu-recabol'>
                <button className='boton-lista-menu'><img src={iconLista} alt="" />Lista de Trabajos</button>
                <button className='boton-lista-menu'><img src={iconMaterial} alt="" />Materiales-Almacen</button>
            </div>;
            break;
        case 'supervisor':
            imgTipoEmpleado = <img src={imgSupervisor} alt="" className='img-tipo-empleado'/>;
            listaOpciones = <div className='lista-menu-recabol'>
                <button className='boton-lista-menu'><img src={iconDeposito} alt="" />Depósito</button>
            </div>;
            break;
        case 'recolector':
            imgTipoEmpleado = <img src={imgRecolector} alt="" className='img-tipo-empleado'/>;
            listaOpciones = <div className='lista-menu-recabol'>
                <button className='boton-lista-menu'><img src={iconRegistro} alt="" />Nuevo Registro</button>
                <button className='boton-lista-menu'><img src={iconLista} alt="" />Lista de Trabajos</button>
            </div>;
            break;
        default:
            listaOpciones = <p>Opción inválida</p>;
    }
    return (
        <div className='main-menu-recabol'>
            <div className='imagen-menu-recabol'>
            {imgTipoEmpleado}
            </div>
            <div className='boton-ver-perfil'>
                <button className='ver-perfil'>Ver perfil<img src={iconConf} alt="" /></button>
            </div>
            {listaOpciones}
            <div className='finalizar-sesion'>
                <button className='boton-finalizar-sesion'><img src={iconFinSesion} alt="" />FINALIZAR SESIÓN</button>
            </div>
        </div>
    )
}

export default MenuRecabol