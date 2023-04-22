import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({pacientes, setPacientes, paciente}) => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    useEffect(() => {
        if(Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setFecha(paciente.fecha);
            setSintomas(paciente.sintomas);
        } 
    }, [paciente]);

    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);

        return random + fecha;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //Validación del Formulario
        if([nombre, propietario, email, fecha, sintomas].includes('')) {
            setError(true);
            return;
        } 

        setError(false);

        // Objeto de Paciente 
        const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas,
            id: generarId()
        }

        // console.log(objetoPaciente);

        setPacientes([...pacientes, objetoPaciente]);

        // Reiniicar el form 
        setNombre('');
        setPropietario('');
        setEmail('');
        setFecha('')
        setSintomas('');
    };

    

    return (
    <div className="lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
        <p className="text-lg mt-5 text-center mb-10">Añade pacientes y <span className="text-indigo-600 font-bold"> Administralos</span></p>

        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 ">

            {error && <Error><p>Todos los campos son Obligatorios</p></Error> }

            <div className="mb-5">
                <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold ">Nombre de la Mascota:</label>
                <input id="mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md " type="text" placeholder="Nombre de la Mascota" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
            </div>

            <div className="mb-5">
                <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold ">Nombre del Propietario:</label>
                <input id="propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md " type="text" placeholder="Nombre del Propietario" value={propietario} onChange={(e) => setPropietario(e.target.value)}/>
            </div>

            <div className="mb-5">
                <label htmlFor="email" className="block text-gray-700 uppercase font-bold ">Correo:</label>
                <input id="email" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md " type="email" placeholder="Correo de contacto" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className="mb-5">
                <label htmlFor="alta" className="block text-gray-700 uppercase font-bold ">Alta:</label>
                <input id="alta" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md " type="date" value={fecha} onChange={(e) => setFecha(e.target.value)}/>
            </div>

            <div className="mb-5">
                <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold ">Sintomas:</label>
                <textarea id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md " placeholder="Describe los sintomas" value={sintomas} onChange={(e) => setSintomas(e.target.value)}/>
            </div>

            <input type="submit" value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'} className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all"/>
        </form>
    </div>
  )
}

export default Formulario;