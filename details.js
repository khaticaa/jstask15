let id = new URLSearchParams(window.location.search).get("id");



 let box = document.querySelector(".box")

fetch(`http://localhost:3000/robots/${id}`)
.then(res => res.json())
.then(data => {
    console.log(data);

    box.innerHTML +=`
    <img src="${data.image}"> 
     <h3>${data.name}</h3>
     <p>${data.description}</p>
     `
 

})

