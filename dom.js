const fname = document.querySelector('.fName');
const lname = document.querySelector('.lName');

const Msg = document.querySelector('.msg')

const Btn = document.querySelector(".btn");
const uList = document.querySelector("ul")

const onSubmit = (e)=>{
    e.preventDefault();
    console.log('hi');
    if(fname.value === "" || lname.value === ""){
        Msg.style.color='red';
        Msg.innerHTML = "Please fill the details"
        setTimeout(()=>{
            Msg.remove();
        },3000);
    }
    else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${fname.value} ${lname.value}`));
        uList.appendChild(li);
        fname.value="";
        lname.value="";
    }
};

Btn.addEventListener('click',onSubmit);