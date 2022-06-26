// Import react hooks
import {useState} from 'react';

// Import react components
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({presupuestoInicial , setPresupuestoInicial}) => {

    const [mensaje , setMensaje ] = useState("");

    // Validate form data
    const handlePresupuesto = (e) =>{
        e.preventDefault();

        presupuestoInicial < 0 || !Number(presupuestoInicial) ? setMensaje("Dato ingresado no valido") :
                                                                setMensaje("Succcess");
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra">
            <form onSubmit={handlePresupuesto} className='formulario'>
                <div className='campo'>
                    <label>Definir presupuesto</label>

                    <input 
                        type = "text" 
                        className = "nuevo-presupuesto"
                        value = {presupuestoInicial}
                        onChange = {e => setPresupuestoInicial(e.target.value)}
                    />
                </div>

                <input 
                    type="submit" 
                    value="Añadir"
                />

                {mensaje && <Mensaje tipo={"error"}>{mensaje}</Mensaje>}
            </form>
        </div>
    );
};

export default NuevoPresupuesto;