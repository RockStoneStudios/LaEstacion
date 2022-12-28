import {useContext} from 'react';
import LaEstacionContext from '../context/EstacionProvider';

const useEstacion = () =>{
    return useContext(LaEstacionContext);
}

export default useEstacion;