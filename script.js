
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

function deleteRobot(id) {
  axios.delete(`http://localhost:3000/robots/${id}`)
  window.location.reload()
}



document.addEventListener("DOMContentLoaded", function () {
  let nav = document.querySelector("nav");
  let menuButton = document.getElementById("click");
  let menu = document.querySelector(".menu");

  menuButton.addEventListener("click", function () {
    menu.classList.toggle("show-menu");
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 1000) {
      menu.classList.remove("show-menu");
    }
  });
});



let clickTop = document.querySelector("#clickTop");

clickTop.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});








let page = 4
let loadBtn = document.querySelector("#loadBtn")

function showData() {
  fetch('http://localhost:3000/robots')
    .then(response => response.json())
    .then(data => {
      data.slice(page - 4, page).forEach(item => {
        boxes.innerHTML += `
                <div class="card">
                <div class="s1img">
                   <img src="${item.image}" alt="" />
                </div>
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <button><a href ="./details.html?id=${item.id}">view details</a></button>
                <button onclick="deleteRobot(${item.id})">Delete</button>
                <button onclick="updateRobot(${item.id})">Update</button>
                </div>
        `
      })
    })
}


showData()

loadBtn.addEventListener("click" , ()=> {
  page+=4
  showData()
})






