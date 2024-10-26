import Page from "../page";
import fetch from "../API/fetch";
import { useEffect, useState } from "react";
function Productos() {
  const [data, setData] = useState([null]);
  const getData = async () => {
    try {
      const fetchData =  await fetch(10);
      setData(fetchData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    
    getData();
  }, [data]);
  console.log(data);

  return (
    <Page>
      <section
    style={{ maxWidth: "80vw",
       
       display: "flex", 
       flexDirection: "column", 
       alignItems: "center" }}>

        <div>Productos</div>
       {data.legth === 0 ? (
       <p>Cargando...</p>
      ) : (
         data.map((dataItem, index) => (
          <div
          key={index}
          style={{ maxWidth: "80vw", }}>
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