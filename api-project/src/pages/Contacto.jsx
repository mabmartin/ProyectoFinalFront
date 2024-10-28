import Page from "../page";

// src/pages/Contacto.jsx
import React from 'react';
import FormularioContacto from '../components/FormularioContacto';

const Contacto = () => {
    return (
        <Page>
        <div>
            <h1 style={{ textAlign: "center" }}>Contacto</h1>
            <FormularioContacto />
        </div>
        </Page>
    );
};

export default Contacto;
