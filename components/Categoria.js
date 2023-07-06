
import Image from "next/image"
import useQuiosco from "../hooks/useQuiosco";

const Categoria = ({ categoria }) => {
    const { categoriaActual, handleClickCategoria } = useQuiosco()

    const { nombre, icono, id } = categoria;
    
  return (
    <div className={`${
        categoriaActual?.id === id ? "bg-green-700" : ""
        } flex items-center gap-2 w-full border p-5 hover:bg-green-500`}>
        <Image 
            width={50}
            height={50}
            src={`/assets/img/icono_${icono}.svg`}
            alt="Imagen Icono"                       
        />    
        <button 
            type="button"
            className="text-2xl font-bold hover:cursor-pointer"
            onClick={()=> handleClickCategoria(id)                
            }   
        >
            {nombre}
        </button>
    </div>
  );
};

export default Categoria