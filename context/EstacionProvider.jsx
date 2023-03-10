import { useState,UseEffect,createContext, useEffect } from "react";
import axios from 'axios';
import {toast} from 'react-toastify';
import {useRouter} from 'next/router';


const LaEstacionContext = createContext();

const EstacionProvider = ({children}) =>{
    const [categorias,setCategorias] = useState([]);
    const [categoriaActual,setCategoriaActual] = useState({});
    const [producto ,setProducto] = useState({});
    const [modal,setModal] = useState(false);
    const [pedido,setPedido] = useState([]);
    const [nombre,setNombre] = useState('');
    const [numMesa,setNumMesa] = useState('');
    const [total,setTotal] = useState(0);
    const router = useRouter();
    const obtenerCategorias = async () =>{
       const {data} = await axios('/api/categorias');
       setCategorias(data);
    }

    useEffect(()=>{
       obtenerCategorias();
    },[]);
    
     useEffect(()=>{
        setCategoriaActual(categorias[0])
     },[categorias]);

     useEffect(()=>{
           const nuevoTotal = pedido.reduce((total,producto)=>(producto.precio*producto.cantidad)+total,0)
           setTotal(nuevoTotal);
        },[pedido])

    const handleClickCategoria = id => {
        const categoria = categorias.filter(cat => cat.id=== id);
        console.log(categoria);
        setCategoriaActual(categoria[0]);
        router.push('/');
    }
    
    const handleSetProducto = producto =>{
        setProducto(producto);
    }

    const handleChangeModal = () => {
        setModal(!modal)
    }


    const handleAgregarPedido = ({categoriaId,...producto}) => {
        if(pedido.some(productoState => productoState.id === producto.id)){
            console.log('El Producto ya existe');
            const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto : productoState)
            setPedido(pedidoActualizado);
            toast.success('Guardado Correctamente')
        }else {
            setPedido([...pedido,producto]);
            toast.success('Agregado al Pedido')
        }
        setModal(false);
    }

    const handleEditarCantidades = id => {
        const productoActualizar = pedido.filter(producto => producto.id === id);
        setProducto(productoActualizar[0]);
      setModal(!modal);
    }
    const handleEliminarProducto = id => {
        const pedidoActualizado = pedido.filter(producto =>producto.id !==id);
        setPedido(pedidoActualizado);
    }

    const colocarOrden = async e => {
        e.preventDefault();
        try{
           await axios.post('/api/ordenes',{pedido,nombre,total,numMesa,fecha:Date.now().toString()});
           // Resetear la app
           setCategoriaActual(categorias[0]);
           setPedido([]);
           setNombre('');
           setTotal(0);
           toast.success('Pedido Realizado Correctamente');

           setTimeout(()=>{
              router.push('/');
           },2900)
        }catch(error){
            console.log(error);
        }
     }

    

    return (
        <LaEstacionContext.Provider
         value={{
            categorias,
            categoriaActual,
            handleClickCategoria,
            handleSetProducto,
            producto,
            modal,
            handleChangeModal,
            handleAgregarPedido,
            pedido,
            handleEditarCantidades,
            handleEliminarProducto,
            nombre,
            setNombre,
            numMesa,
            setNumMesa,
            colocarOrden,
            total

           
        }}
        >
         {children}
        </LaEstacionContext.Provider>
    )
}


export {
    EstacionProvider
}

export default LaEstacionContext