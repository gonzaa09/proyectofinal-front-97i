import React, { useState } from 'react';

const FormularioAgregar = ({ onAgregar }) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [dni, setDni] = useState('');
    const [tel, setTel] = useState('');
    const [consulta, setConsulta] = useState('');
    const [turno, setTurno] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevoPaciente = {
            id: Date.now(),
            nombre,
            apellido,
            email,
            dni,
            tel,
            consulta,
            turno
        };
        onAgregar(nuevoPaciente);
        setNombre('');
        setApellido('');
        setEmail('');
        setDni('');
        setTel('');
        setConsulta('');
        setTurno('');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder="Nombre"
                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="apellido">Apellido</label>
                    <input
                        type="text"
                        className="form-control"
                        id="apellido"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                        placeholder="Apellido"
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="dni">DNI</label>
                    <input
                        type="text"
                        className="form-control"
                        id="dni"
                        value={dni}
                        onChange={(e) => setDni(e.target.value)}
                        placeholder="DNI"
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="tel">Teléfono</label>
                    <input
                        type="tel"
                        className="form-control"
                        id="tel"
                        value={tel}
                        onChange={(e) => setTel(e.target.value)}
                        placeholder="Teléfono"
                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="consulta">Consulta</label>
                    <input
                        type="text"
                        className="form-control"
                        id="consulta"
                        value={consulta}
                        onChange={(e) => setConsulta(e.target.value)}
                        placeholder="Consulta"
                    />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="turno">Turno</label>
                <input
                    type="text"
                    className="form-control"
                    id="turno"
                    value={turno}
                    onChange={(e) => setTurno(e.target.value)}
                    placeholder="Turno"
                />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Agregar Paciente</button>
        </form>
    );
};

export default FormularioAgregar;