import React from 'react'
import Image from 'next/image';
import axios from 'axios';
import {toast} from 'react-toastify';

function Orden({orden}) {
   const {id,nombre,total,numMesa,pedido} = orden;
   
    const completarOrden = async() => {
    try{
      const data =  await axios.post(`/api/ordenes/${id}`);
      toast.success('Orden Lista');
    }catch(error){
       toast.error('Hubo un error');
    }
    }

  return (
    <div className='border p-10 space-y-4'>
       <h3 className='text-xl font-semibold'>Orden: {id}</h3>
       <p className='text-lg my-10'>Cliente : {nombre}</p>
       <p className='text-md font-medium'>Mesa : {numMesa}</p>
       <div>
          {pedido.map(platillo =>(
            <div key={platillo.id} className='py-3 flex border-b last-of-type:border-0 items-center'>
                <div className='w-32'>
                    <Image 
                    width={400}
                    height= {450} 
                    src={`/assets/img/${platillo.imagen}`}
                    alt= {`Imagen Platillo ${platillo.nombre}`}
                    className='rounded-sm'
                    />
                </div>
                <div className='p-5 space-y-2'>
                    <h4 className='text-lg font-bold text-amber-500'>{platillo.nombre}</h4>
                    <p className='text-lg font-semilbold'>cantidad : {platillo.cantidad}</p>
                </div>
            </div>
          ))}
       </div>
       <div className='md:flex md:items-center md:justify-between my-10'>
        <p className='mt-5 font-black text-3xl text-amber-600'>
          Total a Pagar : ${total}
        </p>
        <button
         type='button'
         onClick={completarOrden}
         className='bg-indigo-600 hover:bg-indigo-800 py-3 px-8 md:mt-0 mt-5 text-white font-semibold rounded-md uppercase'
        >
          Completar Orden
        </button>

       </div>

    </div>
  )
}

export default Orden;