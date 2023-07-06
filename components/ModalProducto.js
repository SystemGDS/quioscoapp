import {  useState , useEffect } from 'react'
import Image from 'next/image'
import useQuiosco from '../hooks/useQuiosco'
import { formatearDinero } from '../helpers'

const ModalProducto = () => {

    const { producto, handleChangeModal, handleAgregarPedido, pedido } = useQuiosco();
    const [ cantidad, setCantidad ]  = useState(1);

    const [edicion, setEdicion] = useState(false);

    useEffect(() => {       
         if(pedido.some(pedidoState => pedidoState.id === producto.id)) {
            
            const productoEdicion = pedido.find((pedidoState) => pedidoState.id === producto.id)
            setEdicion(true);
            setCantidad(productoEdicion.cantidad);
         }        
    }, [producto, pedido])

  return (
    <div className='md:flex gap-10'>
        
        <div className='md:w-1/3'>
            <Image
                width={300}
                height={400}
                alt={`imagen producto ${producto.nombre}`}
                src={`/assets/img/${producto.imagen}.jpg`}
            />
        </div>

        <div className='md:w-2/3'>
            <div className='flex justify-end'>
                <button
                    onClick={handleChangeModal}
                    type=""
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-6 w-6" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        strokeWidth={2}
                    >
                        <path  
                            d="M6 18L18 6M6 6l12 12" 
                        />
                    </svg>
                </button>
                
            </div>
            <h1 className='text-3xl font-bold mt-5'>{producto.nombre}</h1>

            <p className='mt-5 font-black text-5xl text-green-800'>
            {formatearDinero(producto.precio)}
            </p>

            <div className='flex gap-4 mt-5'>
                <button 
                    type="button"
                    onClick={() => {
                        if (cantidad <= 1) return; 
                        setCantidad(cantidad - 1);
                    } }
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-8 w-8" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        strokeWidth={2}
                    >
                        <path 
                            
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" 
                        />
                    </svg>
                </button>
                    <p className="text-3xl text-bold text-red-500">{cantidad}</p>
                <button 
                    type="button"
                    onClick={() => { 
                        if (cantidad >= 5) return;
                        setCantidad(cantidad + 1)
                    } }
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-8 w-8" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        strokeWidth={2}
                    >
                        <path                             
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" 
                        />
                    </svg>
                </button>                
            </div>
            <button 
                type="button"
                className="bg-green-500 hover:bg-green-800 hover:text-blue-900 px-5 py-2 mt-5 text-2xl text-bold
                 text-blue-500 uppercase rounded "
                onClick={() => handleAgregarPedido({...producto, cantidad})}
            >
                {edicion ? 'Guardar Cambios' : 'Añadir al Pedido'}
            </button> 
        </div>
    </div>
  )
}

export default ModalProducto