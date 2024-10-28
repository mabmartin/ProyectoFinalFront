import Page from "../page";

import React from "react";
import FormularioContacto from "../components/FormularioContacto";

const Contacto = () => {
  const handleSubmit = (data) => {
    console.log("Datos enviados:", data);
  };

  return (
    <Page>
      <div>
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Contacto</h1>
        <FormularioContacto onSubmit={handleSubmit} />
      </div>
    </Page>
  );
};

export default Contacto;
