import Page from "../page";
import fetch from "../API/FetchNasa";
import { useEffect, useState } from "react";
function Productos() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const fetchedData =  await fetch(10);
      setData(fetchedData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    
    getData();
  }, []);
  

  return (
    <Page style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <section
    style={{ maxWidth: "100vw",
       
       display: "flex", 
       flexDirection: "column", 
       alignItems: "center" }}>

        <div> <h1>PRODUCTOS</h1></div>
       {data.legth === 0 ? (
       <p>Cargando...</p>
      ) : (
         data.map((dataItem, index) => (
          <div
          key={index}
          style={{ maxWidth: "80vw", alignItems: "center", display: "flex", flexDirection: "column" }}>
        <h1>{dataItem.title}</h1>
        <p>{dataItem.date}</p>
        <p>{dataItem.explanation}</p>
        <img src={dataItem.hdurl} alt="imagen constelacion" style={{ width: "100%" }} />
       
        </div>
         ))
   
  )}
  </section>
    </Page>
  );
 
}
export default Productos;