import Head from 'next/head';
import Slidebar from '../components/Slidebar';
import Modal from 'react-modal';
import {ToastContainer} from 'react-toastify'
import useEstacion from '../hooks/useEstacion';
import ModalProducto from '../components/ModalProducto';
import 'react-toastify/dist/ReactToastify.css';
import Pasos from '../components/Pasos';


const customStyles = {
    content :{
        top :"50%",
        left : "50%",
        right :"auto",
        bottom : "auto",
        marginRight : "-50%",
        transform: "translate(-50%,-50%)"
    }
};

Modal.setAppElement("#__next");


export default function Layout({children,pagina}){
    const {modal} = useEstacion();
    return(
        <>
            <Head>
                <title>La Estacion</title>
                <meta name='description' content='La Estacion'/>
            </Head>
            <div className='md:flex'>
                <aside className='md:w-4/12 xl:w-1/4 2xl:w-1/5'>
                 <Slidebar/>
                </aside>
                <main className='md:w-8/12 xl:w-3/4 2xl:w-1/5 h-screen overflow-y-scroll'>
                   <div className='mt-10 p-10'>
                       <Pasos/>
                      {children}
                   </div>
                </main>
            </div>
            {modal && (
                <Modal
                 isOpen={modal}
                 style={customStyles}
                >
                   <ModalProducto/>
                </Modal>
            )}
            <ToastContainer/>
        </>
    )
}