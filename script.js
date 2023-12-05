
const nav = document.querySelector('nav')

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 50){
        nav.style.background = 'rgba(138, 144, 255, 0.9)'
    }
    else{
        nav.style.background = 'transparent'
    }
})



  

const boxes = document.querySelector('.s1bottom')
  
const producs =[
    {name:"The Upper Eye", p:"Who are in extremely love with eco friendly system", button: 'view details', ImageSrc:"p1.png.webp"},
    {name:"The Upper Eye", p:"Who are in extremely love with eco friendly system", button: 'view details', ImageSrc:"p1.png.webp"},
    {name:"The Upper Eye", p:"Who are in extremely love with eco friendly system", button: 'view details', ImageSrc:"p1.png.webp"},
    {name:"The Upper Eye", p:"Who are in extremely love with eco friendly system", button: 'view details', ImageSrc:"p1.png.webp"},
];

producs.forEach((item) =>{
    const card = document.createElement('div')
    card.classList.add('card');

    card.innerHTML = `
    <div class="s1img">
               <img src="${item.ImageSrc}" alt="" />
            </div>
            <h3>${item.name}</h3>
            <p>${item.p}</p>
           <button>${item.button}</button>
    `;
    boxes.appendChild(card)
})