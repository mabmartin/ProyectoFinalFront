async function fetch() {
    try {
       const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
       if (!response.ok) {
        throw new Error('ERROR');
    } 
    const data = await response.json();
    return data;
    }
    catch (error) {
       console.error(error); 
    }
}  
   
   export default fetch;