import Page from "../page";
import fetch from "../API/fetch";
import { useEffect, useState } from "react";
function Productos() {
  const [data, setData] = useState([null]);
  const getData = async () => {
    try {
      const fetchData =  await fetch();
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
        <div>Productos</div>
       {!data ? (
       <p>Cargando...</p>
      ) : (
       <div>
        <h1>{data.title}</h1>
        <p>{data.date}</p>
        <p>{data.explanation}</p>
        <img src={data.hdurl} alt="imagen constelacion" />
       
        </div>
  
   
  )}
    </Page>
  );
 
}
export default Productos;