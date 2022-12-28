import React from 'react'
import Image from 'next/image';
import {formatearDinero} from '../helpers/';
import useEstacion from '../hooks/useEstacion';

function Producto({producto}) {
    const {nombre,precio,imagen} = producto;
    const {handleSetProducto,handleChangeModal} = useEstacion();
  return (
    <div className='border'>
       <div>
       <Image 
        src={`/assets/img/${imagen}.jpg`}
        alt= {`Imagen ${nombre}`}
        width= {400}
        height= {500}
       />
       </div>
       <div className='p-5'>
          <h3 className='text-2xl font-bold'>{nombre}</h3>
          <p className='mt-5 font-black text-2xl text-amber-500'>
            ${precio}
          </p>
          <button type='button'
           className='bg-indigo-600 mt-5 hover:bg-indigo-700 p-3 shadow-lg rounded-md w-full uppercase text-yellow-50 font-semibold '
            onClick={()=> {
              handleChangeModal();
              handleSetProducto(producto);
            }}
           >
            Agregar
          </button>
       </div>
    </div>
  )
}

export default Producto