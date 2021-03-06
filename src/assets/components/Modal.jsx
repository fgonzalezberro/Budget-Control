// Import react hooks
import {useState , useEffect} from 'react';

// Import React components
import Mensaje from './Mensaje';

// Import images
import cerrarButton from "../img/cerrar.svg";

const Modal = ({setModal, animacionModal , setAnimacionModal, guardarDato, editarGasto, setEditarGasto}) => {

    // Component States
    const [nombre , setNombre] = useState("");
    const [cantidad , setCantidad] = useState("");
    const [categoria , setCategoria] = useState("");
    const [mensaje , setMensaje] = useState("");

    useEffect(() =>{
        if(Object.keys(editarGasto).length > 0){
          setNombre(editarGasto.nombre);
          setCantidad(editarGasto.cantidad);
          setCategoria(editarGasto.categoria);
        }
    }, [editarGasto]);

    // Close modal
    const handleModal = () =>{
        setAnimacionModal(false);
        setEditarGasto({});
        setTimeout(() =>{
            setModal(false);
        },600);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if([nombre, cantidad, categoria].includes("")){
            setMensaje("Ningun campo puede quedar vacio");

            setTimeout(() =>{
                setMensaje("");
            },2000);
        }else{
            guardarDato({nombre, cantidad, categoria});
        }
    }

    return (
        <div className="modal">
            <div className='cerrar-modal'>
                <img 
                    src={cerrarButton}
                    alt="Close modal icon" 
                    onClick = {handleModal}
                />
            </div>

            <form 
                onSubmit={handleSubmit}
                className={`formulario ${animacionModal ? "animar" : "cerrar"}`
            }>
                <legend>{editarGasto.nombre ? "Editar gasto" : "Nuevo gasto"}</legend>

                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

                <div className='campo'>
                    <label htmlFor="nombre">Nombre</label>

                    <input 
                        id="nombre"
                        type="text" 
                        placeholder="A??ade nombre del gasto"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>

                <div className='campo'>
                    <label htmlFor="cantidad">Cantidad</label>

                    <input 
                        id="cantidad"
                        type="number" 
                        placeholder="A??ade cantidad. Ej: 300"
                        value={cantidad}
                        onChange={e => setCantidad(Number(e.target.value))}
                    />
                </div>

                <div className='campo'>
                    <label htmlFor="categoria">Categoria</label>

                    <select 
                        id="categoria"
                        value={categoria}
                        onChange={e => setCategoria(e.target.value)}
                    >
                        
                        <option value="">-- Seleccione categoria</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>

                <input 
                    type="submit" 
                    value={editarGasto.nombre ? "Modificar gasto" : "A??adir gasto"}
                />
            </form>
        </div>
    );
};

// Export modal component
export default Modal;