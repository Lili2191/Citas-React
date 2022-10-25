import Paciente from "./pacientes";
//import { useEffect } from 'react'
function ListadoPaciente({ pacientes, setPaciente, eliminarPaciente }) {

  /*{useEffect(() => {
    if(pacientes.length>=1)
    console.log('nuevo paciente')
  },[pacientes])}*/

  return (
    <div className="md:w-1/2 lg:w-3/5 overflow-y-scroll md:h-screen box-sizzing:border-box">

      {pacientes.lenght === 0 ? (
        <div>
          <h2 className=" font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl text-center mt-5">Comienza a agregar pacientes
            <span className="text-indigo-600 font-bold">y apareceran en este lugar</span></p>
        </div>
      ) : (
        <div>
          <h2 className="font-black text-3xl text-center">Lista de pacientes</h2>
          <p className="text-xl mb-10 mt-5 text-center">Administra tus<span className="text-indigo-700 font-bold">Pacientes/Citas</span></p>

          {pacientes.map(paciente => (<Paciente
            key={paciente.id} paciente={paciente}
            eliminarPaciente={eliminarPaciente}
            setPaciente={setPaciente}
          />))}

          <h2 className="font-black text-center mt-10">Citas agendadas <span className="text-indigo-700">{pacientes.length}</span></h2>
        </div>

      )}</div>
  )
}


export default ListadoPaciente