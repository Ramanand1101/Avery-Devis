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

//Create product data code here
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

            let td2=document.createElement("td")
            let del=document.createElement("button")
            del.innerText="Delete"
            del.setAttribute("class","del-btn")
            del.addEventListener("click", ()=>{
                deleteNote(element._id)
            })
           
            td1.append(image)
            td2.append(del)
            card.append(td1,brand,price,category,size,desc,rating,td2);
            container.append(card)
        });
    }
    //delete product data code here

    const deleteNote=(noteID)=>{
        fetch(`http://localhost:8080/product/delete/${noteID}`,{
            method:"DELETE",
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        })
    }
