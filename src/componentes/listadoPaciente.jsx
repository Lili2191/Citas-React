function ListadoPaciente(){
    return(
        <div className="md:w-1/2 lg:w-3/5 overflow-y-scroll md:h-screen">
          <h2 className="font-black text-3xl text-center">Listado Paciente</h2>
          <p className="text-xl mb-10 mt-5 text-center">Administra tus <span className="text-indigo-600 font-bold">Pacientes/Citas</span>{" "}</p>
          <div className="mt-3 py-10 rounded-xl bg-slate-300 shadow-md  px-5">
            <p className="font-bold mb-3 text-gray-700">Nombre: <span className="font normal-case">Galleta</span></p>
          </div>
        </div>
    );
}
export default ListadoPaciente