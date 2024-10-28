async function fetch(count) {
    try {
      if (count) {
       const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=zsq6U5jpoGg2Yq4m933vbRpDQzhnsMYfC5dy7WkL=${count}'

       );
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
   
   export default fetch;