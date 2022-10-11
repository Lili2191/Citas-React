//Es el nucleo del proyecto
//Une los componentes

import Header from "./componentes/header";
import listadoPaciente from "./componentes/listadoPaciente";

function App() {
  return(
    <>
    <Header/>
    <listadoPaciente/>
    </>
  )
}

export default App;
