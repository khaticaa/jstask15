
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
                </div>
        `
        })
    })

