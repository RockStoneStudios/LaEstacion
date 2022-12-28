import useSwr from 'swr';
import axios from 'axios';
import AdminLayout from "../layout/AdminLayout";
import Orden from '../components/Orden';

export default function Admin() {
    const fetcher = () => axios('/api/ordenes').then(datos => datos.data);
    const {data,error,isLoading} = useSwr('/api/ordenes',fetcher,{refreshInterval : 100});
    console.log(data);
    return (
        <AdminLayout pagina={'Admin'}>
        <h1 className="text-3xl font-black">Panel de Administracion</h1>
        <p className="text-2xl my-10">Administracion las Ordenes</p>
        {data && data.length? data.map(orden =>
            <Orden key={orden.id}  orden={orden}/>
            ) : <p className='text-2xl font-semibold text-center'>No hay Ordenes</p>}
        </AdminLayout>
    )
}