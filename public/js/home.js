
const array = ['../images/general_img/Pratice.jpg', '../images/general_img/image2.jpg' ,'../images/general_img/image3.jpg']
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

