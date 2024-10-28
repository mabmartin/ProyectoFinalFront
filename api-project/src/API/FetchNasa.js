async function fetchNasa(count) {
    try {
      if (count) {
       const response = await fetch ( `https://api.nasa.gov/planetary/apod?api_key=icG6JnrcSkQVt5Mn481Nv0yGWaFTZNw5IsI0ZuCA&count=${count}`);
        

       
       if (!response.ok) {
        throw new Error('ERROR');
    } 
    const data = await response.json();
    console.log(data);
    return data;
    }
    return [];
   } catch (error) {
       console.error(error); 
    }
}  
   
   export default fetchNasa;