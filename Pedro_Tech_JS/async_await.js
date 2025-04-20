const axios = require('axios');
async function fetchData(apiUrl){
    try{
        const response = await axios.get(apiUrl);
        console.log(response.data);
    }
    catch(err){
        console.log(err.message);
    }
    finally{
        console.log("Requested Completed Successfully");
    }
    

}

fetchData('https://jsonplaceholder.typicode.com/posts/1');