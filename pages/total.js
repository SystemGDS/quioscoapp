import { useEffect, useCallback } from "react";
import Layout from "../layout/Layout";
import useQuiosco from "../hooks/useQuiosco";
import { formatearDinero } from "../helpers";

export default function Total(){

    const { pedido, nombre, setNombre, colocarOrden, total } = useQuiosco()

    const comprobarPedido = useCallback(() => {
        return pedido.length === 0 || nombre === '' || nombre.length < 3;
    },[pedido, nombre]);

    

    useEffect(() => {
        comprobarPedido();
    },[pedido, comprobarPedido]);

   
    return (
        <Layout pagina ="Total y confirmar pedido">
            <h1 className="text-4xl font-black pl-2">Resumen</h1>
            <p className="text-2xl my-10 pl-2" >Confirma tu pedido a Continuacion</p>
        
            <form
                onSubmit={colocarOrden}
            
            >
                <div className="pl-3">
                    <label
                    htmlFor="nombre" 
                    className="block uppercase text-slate-800 font-bold 
                    text-xl">
                        Nombre
                    </label>
                    <input 
                    id="nombre"
                    type="text" 
                    className="bg-gray-200 w-full lg:w-1/3 mt-3
                    p-2 rounded-md"
                    value={nombre}
                    onChange= { (e) => setNombre(e.target.value)}
                    />                        
                    
                    <div className="mt-10">
                        <p className="text-2xl">
                            Total a Pagar {""}{" "}
                            <span className="font-bold">{formatearDinero(total)}</span>
                        </p>
                    </div>

                    <div className="mt-3">
                        <input 
                        type="submit"
                        className={`${comprobarPedido() ? 'bg-indigo-100': "bg-indigo-600 hover:bg-indigo-800"}  w-full lg:w-auto px-5 py-2
                        rounded uppercase font-bold text-white text-center`}
                        value="Confirmar Pedido" />
                    </div>
                </div>
            </form>
        </Layout>
    );   
}