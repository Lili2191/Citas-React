//Es el nucleo del proyecto
//Une los componentes

import Header from "./componentes/header"
import ListadoPaciente from "./componentes/listadoPaciente"
import Formulario from "./componentes/formulario"
import Error from "./componentes/error"
import Pacientes from "./componentes/pacientes"

function App() {
  return(
    <>
    <Header/>
    <ListadoPaciente/>
    <Formulario/>
    <Error/>
    <Pacientes/>
    </>
  )
}

export default App;
