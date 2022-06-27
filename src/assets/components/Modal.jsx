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
            </form>
        </div>
    );
};

// Export modal component
export default Modal;