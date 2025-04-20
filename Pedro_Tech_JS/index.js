const event = new Promise((resolve, reject)=>{
    let name = "jaya";
    if(name == "jaya")
        resolve(name);
    else
        reject("Invalid Name Provided");
});

event.then((name)=>{
    console.log("My Name is ",name)
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("Promised Completed Successfully");
});