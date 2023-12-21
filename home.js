
const array = ['images/Pratice.jpg', 'images/image2.jpg' ,'images/image3.jpg']
const title = document.getElementById('text')
const arrow_left = document.getElementById('Left')
const arrow_rigth = document.getElementById('Right')
const image = document.getElementById('image')

let count = 0
function moveRight(){
   if(count === array.length-1){
      count = 0  
      image.src = array[count]
   } else {
      count++
      image.src = array[count]
   }
}
function moveLeft(){
   if(count === 0){
      count = array.length-1
      image.src = array[count]
   } else {
      count--
      image.src = array[count]
   }
}

 arrow_left.addEventListener('mouseenter' , () => {
    title.style.cssText = 'margin-left:5px;'+'transition:0.6s ease-in-out;'
 })
 arrow_left.addEventListener('mouseleave' , () => {
    title.style.cssText = 'margin-left:5px'+'transition:0.6s ease-in-out;'
 })
arrow_rigth.addEventListener('mouseenter' , () => {
   title.style.cssText = 'margin-right:5px;'+'transition:0.6s ease-in-out;'
})
arrow_rigth.addEventListener('mouseleave' , () => {
   title.style.cssText = 'margin-right:5px;'+'transition:0.6s ease-in-out;'
})

