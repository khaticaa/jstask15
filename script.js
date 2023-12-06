
const nav = document.querySelector('nav')

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(138, 144, 255, 0.9)'
    }
    else {
        nav.style.background = 'transparent'
    }
})





const boxes = document.querySelector('.s1bottom')
fetch('http://localhost:3000/robots')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            boxes.innerHTML += `
                <div class="card">
                <div class="s1img">
                   <img src="${item.image}" alt="" />
                </div>
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <button><a href ="./details.html?id=${item.id}">view details</a></button>
                <button onclick="deleteRobot(${item.id})">Delete</button
                </div>
        `
        })
    })



function deleteRobot(id){
    axios.delete(`http://localhost:3000/robots/${id}`)
    window.location.reload()
}



// const name = document.querySelector("#name")
// const category = document.querySelector("#category")
// const image = document.querySelector("#image")
// const img = document.querySelector("#img")
// const form = document.querySelector(".category-form")

// form.addEventListener("submit", function (event) {
//     event.preventDefault()
//     let obj = {}
//     let src = image.files[0]
//     const reader = new FileReader();
//     reader.onload = function (e) {
//         obj = {
//             image: e.target.result,
//             name: name.value,
//             category: category.value
//         }
//         axios.post("http://localhost:3000/robots", obj)
//     };
//     reader.readAsDataURL(src);
//     window.location="index.html"
// })