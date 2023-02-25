const product=()=>{
    const payload={
        name:document.getElementById("name").value,
        price:document.getElementById("price").value,
        category:document.getElementById("category").value,
        size:document.getElementById("size").value,
        image:document.getElementById("image").value,
        description:document.getElementById("description").value,
        rating:document.getElementById("rating").value
    }

    fetch("http://localhost:8080/product/create",{
        method:"POST",
        headers:{
            "Content-type":"application/json",
            "Authorization":localStorage.getItem("token")
        },
        body:JSON.stringify(payload)
        
        
    })
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
}
let container=document.querySelector("#products tbody");
    fetch("http://localhost:8080/product/",{
        method:"GET",
        headers:{
            "Content-type":"application/json",
            "Authorization":localStorage.getItem("token")
        },

    })
    .then((responseObject)=>{
        return responseObject.json();
    })
    .then((acctualData)=>{
        console.log(acctualData)
        displayProducts(acctualData)
    })
    .catch(err=>console.log(err))

    //data is to be fetch data
    function displayProducts(data){
        data.forEach(element => {
            let card=document.createElement("tr");

            const td1 = document.createElement("td");
            let image=document.createElement("img")
            image.setAttribute("src",element.image)
            image.setAttribute("id","product-img")
            
            
           
            let brand=document.createElement("td")
            brand.innerText=element.name     
             
            let price=document.createElement("td")
            price.innerText=element.price    

            let category=document.createElement("td")
            category.innerText=element.category    

            let desc=document.createElement("td")
            desc.innerText=element.description  

            let size=document.createElement("td")
            size.innerText=element.size  
            let rating=document.createElement("td")
            rating.innerText=element.rating 

            td1.append(image)
            card.append(td1,brand,price,category,size,desc,rating);
            container.append(card)
        });
    }