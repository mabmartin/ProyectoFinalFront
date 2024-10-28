import React, { useState } from 'react';

const FormularioContacto = ({ onSubmit }) => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ nombre, email, mensaje });
        
       

        setNombre('');
        setEmail('');
        setMensaje('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column',alignItems: 'center', gap: '10px' }}>
            <div>
                <label htmlFor="nombre">Nombre:</label>
                <input 
                    type="text" 
                    id="nombre" 
                    value={nombre} 
                    onChange={(e) => setNombre(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label htmlFor="mensaje">Mensaje:</label>
                <textarea 
                    id="mensaje" 
                    value={mensaje} 
                    onChange={(e) => setMensaje(e.target.value)} 
                    required 
                />
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default FormularioContacto;
