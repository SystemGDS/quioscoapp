
import Layout from '../layout/Layout';
import useQuiosco from '../hooks/useQuiosco';
import Producto from '../components/Producto'

export default function Home() {
  
  const { categoriaActual } = useQuiosco();

  return (
    <Layout pagina={`Menu ${categoriaActual?.nombre}`}>
        <h1 className="text-4xl font-black">{categoriaActual?.nombre}</h1>

        <p className="text-2xl my-10">
          Elije y personaliza tu pedido a continuacion
        </p>

        <div className="grid gap-4 grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 px-2">
        {categoriaActual?.productos?.map((producto) =>(
          <Producto 
            key={producto.id} 
            producto={producto} 
          />
        ))}
        </div>
    </Layout>
    
  );
}


