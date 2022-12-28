import React from 'react'
import {useRouter} from 'next/router';
import useEstacion from '../hooks/useEstacion';
const pasos = [
   {paso :1,nombre:'Menu',url:'/'},
   {paso :2, nombre : 'Resumen',url : '/resumen'},
   {paso:3, nombre : 'Datos y Total', url :'/total'}
]
const Pasos = () => {
    const router = useRouter();
    
 
     const calcularProgreso = () => {
        let valor;
         if(router.pathname==="/"){
            valor = 8;
         }else if(router.pathname==="/resumen"){
           valor = 52;
         }else {
            valor = 100;
         }
        return valor;
     }

  return (
    <>
     <div className='flex justify-between mb-5'>
        {pasos.map(paso =>(
            <button 
             onClick={()=>{
                router.push(paso.url);
                
             }}
             className='font-bold sm:text-2xl'
              key={paso.paso}
              >
                {paso.nombre}
            </button>
        ))}
     </div>
     <div className='bg-gray-100 mb-10'>
        <div 
        style={{width:`${calcularProgreso()}%`}}
        className='rounded-full bg-amber-500 text-xs leading-none h-2  text-white text-center'
        >
          
        </div>
     </div>
    </>
  )
}

export default Pasos

