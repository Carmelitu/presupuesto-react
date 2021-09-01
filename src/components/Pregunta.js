import React, { Fragment, useState } from 'react';
import Error from './Error';

const Pregunta = ({setPresupuesto, setRestante}) => {

    // Definir el State
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    // Funcion que lee el presupuesto
    const definirPresupuesto = e => {
        setCantidad(parseInt(e.target.value));
    }

    // Submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        // Validar
        if(cantidad < 1 || isNaN(cantidad)){
            setError(true);
            return;
        }

        // Validacion Pasada
        setError(false);

        setPresupuesto(cantidad);
        setRestante(cantidad);



    }

    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            {error ? <Error mensaje="El presupuesto ingresado no es válido" /> : null }

            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />

                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />

            </form>
        </Fragment>
     );
}
 
export default Pregunta;