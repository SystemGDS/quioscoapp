import ResumenProducto from "../components/ResumenProducto";
import useQuiosco from "../hooks/useQuiosco";
import Layout from "../layout/Layout";

export default function Resumen() {
    const {pedido} = useQuiosco();
    return (
        <Layout pagina="Resumen">
            <h1 className="text-4xl font-black pl-3">Resumen</h1>
            <p className="text-2xl my-10 pl-3">Revisa tu Pedido</p>

            {pedido.length === 0 ?(
                <p className="text-center text-2xl">No hay Elementos en tu pedido</p>
            ):(
                pedido.map(producto =>(
                    <ResumenProducto 
                        key = {producto.id}
                        producto={producto}
                    />
                ))
            )};
        </Layout>
    )
}