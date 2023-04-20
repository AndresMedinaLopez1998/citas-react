import Paciente from "./Paciente";

const ListadoPacientes = () => {
  return (
    <div className="lg:w-3/5 lg:h-screen lg:overflow-y-scroll">
        <h2 className="font-black font-3xl text-center">Listado Pacientes</h2>
        <p className="text-xl mt-5 mb-10 text-center">Administra tus <span className="text-indigo-600 font-bold"> Pacientes y Citas</span></p>

        <Paciente />
        <Paciente />
        <Paciente />
        <Paciente />
        <Paciente />
        <Paciente />
    </div>
  )
}

export default ListadoPacientes;