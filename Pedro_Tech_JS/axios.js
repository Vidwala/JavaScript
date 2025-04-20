const axios = require("axios");

const data = axios.get("https://jsonplaceholder.typicode.com/posts/1");

data
.then((res)=>{
    console.log(res.data);
})
.catch((err)=>{
    console.log(err);
})
.finally(()=>{
    console.log("Promise Resolved !!!");
});

