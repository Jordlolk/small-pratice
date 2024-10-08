
const countries = [
    {
        name : 'Brazil' ,
        image : '../images/brazil/Brazil.jpg'
    },
    {
        name : 'Italia' ,
        image : '../images/italia/italia.jpg'
    },
    {
        name : 'Canada' ,
        image : '../images/canada/canada.jpg'
    },
    {
        name : 'Paris' ,
        image : '../images/franca/France.jpg'
    }
]


const input_text = document.getElementById('inputText').value,
result = document.getElementById('result'),
input = document.getElementById('inputText') , 
imgs = document.getElementsByClassName('imgs') ;
const test = document.getElementById('teste') 

const IMGSHTML = countries.map((count , index) => {
        return `<div class="imgs">
        <img id="teste" class="img" src="${count.image}" alt="${count.name}">
        <button class="imgs-button" draggable="false">${count.name}</button>
        </div>`
}).join('')

const menuImgs = document.getElementById('imgs-menuJs')
menuImgs.innerHTML = IMGSHTML

input.addEventListener('input' , inputEventText) 
const imagens = []

for(let i = 0 ; i < imgs.length ; i++){
    imagens.push(imgs[i])
}

function inputEventText(e){

    imagens.filter((img) => {
        const nomePais = img.firstElementChild.alt.toLowerCase()

       if(nomePais.startsWith(e.target.value.toLowerCase())){
           img.style.cssText = "display: flex;"
       }
       else{
           img.style.cssText = "display: none;"
       }
    });
}