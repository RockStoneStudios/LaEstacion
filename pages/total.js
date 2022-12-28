import Layout from "../layout/Layout";
import { useEffect,useCallback } from "react";
import useEstacion from "../hooks/useEstacion";
export default function Total() {

   const {pedido,nombre,setNombre,numMesa,setNumMesa,colocarOrden,total} = useEstacion();
 
   const comprobarPedido = useCallback(() =>{
    return pedido.length ===0 || nombre === '' || numMesa=== "";
   },[pedido,nombre,numMesa]);
  
   useEffect(()=>{
    
      comprobarPedido()  
   },[pedido,comprobarPedido])

 
    return (
       <Layout pagina= "Total y Confirmar Pedido">
         <h1 className="text-4xl font-black ">Total y confirmar Pedido</h1>
         <p className="text-xl my-10">Confirma tu Pedido</p>
       <form onSubmit={colocarOrden}>
        <div>
          <label 
           htmlFor="nombre"
           className="block uppercase text-slate-800">Nombre</label>
          <input 
            value={nombre}
            onChange ={e=> setNombre(e.target.value)}
            id="nombre"
            type="text"
            className ="bg-gray-200 w-full lg:w-1/3 p-3 rounded-sm"
            placeholder="Ingresa Nombre" 
          
          />
        </div> 
         <div className="mt-4">
          <label htmlFor="numero" className="block uppercase text-slate-700">Numero Mesa</label>
          <input 
           value={numMesa}
           onChange={e => setNumMesa(e.target.value)}
           id="numero"
           type= "text"
           className="bg-gray-200 w-full lg:w-1/4 p-1 rounded-sm"
          />
        
         <div className="mt-6">
           <p className="text-xl">Total a pagar {''} <span className="font-bold">${total}</span></p>
         </div>
         <div className="mt-10">
          <input
           type= "submit"
           className=
           {`${comprobarPedido() ? 'bg-indigo-300' :  'bg-indigo-600 hover:bg-indigo-700' } w-full lg:w-auto px-5 py-2 text-center rounded uppercase font-bold text-white cursor-pointer`} 
           value="Confirmar Pedido"
           disabled = {comprobarPedido()}
            />
         </div>
        </div>
       </form>
       </Layout>
    )
}