import React from 'react';
import Image from 'next/image';
import useEstacion from '../hooks/useEstacion';

const ResumenProducto = ({producto}) => {
    const {handleEditarCantidades,handleEliminarProducto} = useEstacion();
  return (
    <div className='shadow p-5 mb-3 flex gap-10 items-center'>
        <div className='md:w-1/6'>
         <Image
           width={350}
           height={400}
           alt= {`Image producto ${producto.nombre}`}
           src={`/assets/img/${producto.imagen}`}
           className= "rounded-sm"
        />
        </div>
        <div className='md:w-4/6'>
            <p className='text-2xl font-bold'>{producto.nombre}</p>
            <p className='text-xl mt-2 font-bold'>Cantidad : {producto.cantidad}</p>
            <p className='text-xl font-semibold text-amber-500 mt-2'> Precio : ${producto.precio}</p>
            <p className='text-sm font-semibold text-gray-700'>Subtotal : ${producto.precio * producto.cantidad}</p>
        </div>
        <div>
            <button
             onClick={()=>handleEditarCantidades(producto.id)}
             type='button'
             className='bg-sky-600 hover:bg-sky-700 flex px-5 py-2 gap-2 text-white rounded-md font-bold uppercase shadow-md lg:w-auto'
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
               </svg>

                Editar
            </button>
            <button
             onClick={()=> handleEliminarProducto(producto.id)}
             type='button'
             className='bg-red-600 hover:bg-red-700 flex gap-2 px-5 py-2 mt-3 text-white rounded-md font-bold uppercase shadow-md lg:w-auto'
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>

                Eliminar
            </button>
        </div>
    </div>
  )
}

export default ResumenProducto