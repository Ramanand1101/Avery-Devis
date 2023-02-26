// ======================================================= Do not touch this code this is base url  =================================================
const api_base_url = "http://localhost:8080";
// ======================================================= Do not touch this code this is base url  =================================================


//=========================================================== this code for taking the data of filter and sort ======================================
const filterByCategory = document.getElementById("filter-by-category");
const sortByPrice = document.getElementById("sort-by-price");
const sortByRatings = document.getElementById("sort-by-ratings");
const token = localStorage.getItem("token");


//=========================================================== this code for fetching the data  ======================================
let container=document.querySelector(".p-container");
getProducts()
async function getProducts(){
    try{
        const res=await  fetch(`${api_base_url}/product/`,{
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
    }catch(err){
        console.log(error)
    }

    }

   
   

    //data is to be fetch data
    function displayProducts(data){
        data.forEach(element => {
            let card=document.createElement("div");

            let image=document.createElement("img")
            image.setAttribute("src",element.image)
            image.setAttribute("id","product-img")
            
            let brand=document.createElement("p")
            brand.innerText=element.name 
            brand.setAttribute("class","b-name")    
             
            let price=document.createElement("p")
            price.innerText=element.price    
            price.setAttribute("class","p-name")   

            let category=document.createElement("h5")
            category.innerText=element.category 
            category.setAttribute("class","cat-name")      

            let desc=document.createElement("p")
            desc.innerText=element.description  
            desc.setAttribute("class","des-name")   

            let size=document.createElement("p")
            size.innerText=element.size  
            size.setAttribute("class","size-name")   

            let rating=document.createElement("p")
            rating.innerText="⭐ "+element.rating
            rating.setAttribute("class","rat-name")   

         
        const cartBtn = document.createElement("button");
        cartBtn.innerText = "Add to Cart";
        cartBtn.setAttribute("class","c-btn")
        cartBtn.addEventListener("click", () => {
            if (token) {
                addToCartfun(element);
            } else {
                swal("Please Login in first");
            }
        });
           
    
            card.append(image,brand,price,category,size,desc,rating,cartBtn);
           container.append(card)
        });
    }
    //delete product data code here

    const deleteNote=(noteID)=>{
        fetch(`${api_base_url}/product/delete/${noteID}`,{
            method:"DELETE",
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        })
    }
    async function addToCartfun(prod) {
        try {
            let res = await fetch(`${api_base_url}/cartproducts/add`, {
                method: "POST",
                body: JSON.stringify(prod),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token
                },
            });
            if (res.ok) {
                console.log("product added")
            } else {
                console.log(res);
                console.log(res.json());
            }
        } catch (error) {
            console.log(error);
        
        }
    
    }

    
// filterByCategory.addEventListener("change", async () => {
//     if (sortByPrice.value == "" && filterByCategory.value == "") {
//         const res = await fetch(`${api_base_url}/product/`);
//         const data = await res.json();
//         displayProducts(data);
//     } else if (sortByPrice.value == "htl" && filterByCategory.value != "") {
//         const res = await fetch(`${api_base_url}/product/?sort=dsc&category=${filterByCategory.value}`);
//         const data = await res.json();
//         displayProducts(data);
//     } else if (sortByPrice.value == "lth" && filterByCategory.value != "") {
//         const res = await fetch(`${api_base_url}/product/?sort=asc&category=${filterByCategory.value}`);
//         const data = await res.json();
//         displayProducts(data);
//     } else if (filterByCategory != "") {
//         const res = await fetch(`${api_base_url}/product/?category=${filterByCategory.value}`);
//         const data = await res.json();
//         displayProducts(data);
//     }


// });

// sortByPrice.addEventListener("change", async () => {
//     if (sortByPrice.value == "" && filterByCategory.value == "") {
//         const res = await fetch(`${api_base_url}/product`);
//         const data = await res.json();
//         displayProducts(data);
//     } else if (sortByPrice.value == "htl" && filterByCategory.value != "") {
//         const res = await fetch(`${api_base_url}/product/?sort=dsc&category=${filterByCategory.value}`);
//         const data = await res.json();
//         displayProducts(data);
//     } else if (sortByPrice.value == "lth" && filterByCategory.value != "") {
//         const res = await fetch(`${api_base_url}/product/?sort=asc&category=${filterByCategory.value}`);
//         const data = await res.json();
//         displayProducts(data);
//     } else if (sortByPrice.value == "") {
//         const res = await fetch(`${api_base_url}/product`);
//         const data = await res.json();
//         displayProducts(data);
//     } else if (sortByPrice.value == "htl") {
//         const res = await fetch(`${api_base_url}/product/?sort=dsc`);
//         const data = await res.json();
//         displayProducts(data);
//     } else if (sortByPrice.value == "lth") {
//         const res = await fetch(`${api_base_url}/product/?sort=asc`);
//         const data = await res.json();
//         displayProducts(data);
//     }
// })

// sortByRatings.addEventListener("change", async () => {
//     const rati = sortByRatings.value;
//     if (rati != '') {
//         try {
//             const res = await fetch(`${api_base_url}/product`);
//             const data = await res.json();
//             if (rati == "4a") {
//                 const data1 = data.filter((el) => {
//                     return el.rating >= 4
//                 });
//                 console.log(data1)
//                 displayProducts(data1)
//             } else if (rati == "5") {
//                 const data1 = data.filter((el) => {
//                     return el.rating == 5
//                 });
//                 console.log(data1)
//                 displayProducts(data1)
//             } else {
//                 const data1 = data.filter((el) => {
//                     return el.rating >= 3
//                 });
//                 console.log(data1)
//                 displayProducts(data1)
//             }
//         } catch (error) {

//         }
//     }
// })

// filterBtn.addEventListener('click', () => {
//     const filter = filterInput.value;

//     // Make GET request to server to filter products by name
//     fetch(`/products?filter=${filter}`)
//       .then(response => response.json())
//       .then(products => {
//         // Clear current table data
//         productTable.innerHTML = '';

//         // Add filtered products to table
//         for (const product of products) {
//           const row = document.createElement('tr');

//           const idCell = document.createElement('td');
//           idCell.textContent = product.id;
//           row.appendChild(idCell);

//           const nameCell = document.createElement('td');
//           nameCell.textContent = product.name;
//           row.appendChild(nameCell);

//           const descCell = document.createElement('td');
//           descCell.textContent = product.description;
//           row.appendChild(descCell);

//           const priceCell = document.createElement('td');
//           priceCell.textContent = product.price;
//           row.appendChild(priceCell);

//           productTable.appendChild(row);
//         }
//       })
//       .catch(error => {
//         console.error('Error filtering products:', error);
//       });
//   });

//======================================================== Search the product using search route =======================================================

const search=async()=>{
    const searchQuery = document.querySelector(".search-text").value;
    const response = await fetch(`${api_base_url}/search?q=${searchQuery}`);
    const products = await response.json();
    products.forEach(product => {
        const productItem = document.createElement('li');
        productItem.textContent = product.name;
        productList.appendChild(productItem);
      });
    };