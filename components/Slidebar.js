import React, { useState } from 'react'
import Image from 'next/image';
import useEstacion from '../hooks/useEstacion';
import Categoria from './Categoria';

const Slidebar = () => {
  const {categorias} = useEstacion();
  
  return (
    <>
        <Image
         width={180}
         height={100} 
         src="/assets/img/logo.svg"
         alt='imagenLog'/>
         <nav className='mt-10'>
           {categorias.map(categoria=>(
             <Categoria
              key={categoria.id}
              categoria={categoria}
             />
           ))}
         </nav>
         
    </>
  )
}

export default Slidebar;