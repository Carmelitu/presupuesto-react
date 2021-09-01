import React, {useState} from 'react';
import Formulario from './components/Formulario';
import Pregunta from './components/Pregunta';
import Listado from './components/Listado';

function App() {
  // Definir State
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [pregunta, setPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);

  // Cuando se agrega un nuevo gasto
  const nuevoGasto = gasto => {
    setGastos([...gastos, gasto]);
  }

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">
          {pregunta ? 
          (
            <Pregunta 
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setPregunta={setPregunta}
            /> 
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario 
                  nuevoGasto={nuevoGasto}
                />
              </div>
              <div className="one-half column">
                <Listado
                  gastos={gastos}
                />
              </div>
            </div>
          )}     
        
        </div>
      </header>
    </div>
  );
}

export default App;
