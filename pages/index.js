import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import {PrismaClient} from '@prisma/client';
import Layout from '../layout/Layout';
import useEstacion from '../hooks/useEstacion'; 
import Producto from '../components/Producto';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
   const { categoriaActual} = useEstacion();
    
  return (
   <Layout pagina={categoriaActual?.nombre}>
     <h1 className='text-4xl font-black'>{categoriaActual?.nombre}</h1>
     <p className='text-xl mt-10'>Elige Tu Pedido a continuacion</p>
     <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>

      {categoriaActual?.productos?.map(producto=> (
        <Producto key={producto.id} producto={producto}/>
      ))}
     </div>
   </Layout>
  )
}
