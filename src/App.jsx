//Es el nucleo del proyecto
//Une los componentes

import Header from "./componentes/header"
import ListadoPaciente from "./componentes/listadoPaciente"
import Formulario from "./componentes/formulario"
//los estilos se meten con classname en los elementos
function App() {
  return(
    <div className="mt-20">
    <Header/>
    <Formulario/>
    <ListadoPaciente/>
    </div>
  )
}

export default App;
