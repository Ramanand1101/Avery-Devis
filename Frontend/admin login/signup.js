const logo=document.querySelector(".logo")
logo.addEventListener("click",()=>{
    location.assign("../index.html")
})

const SignUp=()=>{
    const payload={
        fname:document.getElementById("fname").value,
        lname:document.getElementById("lname").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
    }
    fetch("http://localhost:8080/user/register",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(payload)
    })
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
}
