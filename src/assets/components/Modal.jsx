// Import react library
import React from 'react';

// Import images
import cerrarButton from "../img/cerrar.svg";

const Modal = ({setModal, animacionModal , setAnimacionModal}) => {

    const handleModal = () =>{
        setAnimacionModal(false);

        setTimeout(() =>{
            setModal(false);
        },600);
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

            <form className={`formulario ${animacionModal ? "animar" : "cerrar"}`}>
                <legend>Nuevo gasto</legend>

                <div className='campo'>
                    <label htmlFor="nombre">Nombre gasto</label>

                    <input 
                        id="nombre"
                        type="text" 
                        placeholder="Añade nombre del gasto"
                    />
                </div>

                <div className='campo'>
                    <label htmlFor="cantidad">Cantidad</label>

                    <input 
                        id="cantidad"
                        type="text" 
                        placeholder="Añade cantidad. Ej: 300"
                    />
                </div>

                <div className='campo'>
                    <label htmlFor="categoria">Categoria</label>

                    <select 
                        id="categoria"
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
                    value="Añadir gasto"
                />
            </form>
        </div>
    );
};

// Export modal component
export default Modal;