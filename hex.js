const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btnn =document.getElementById('btn');
const color =document.querySelector('.color');
btnn.addEventListener("click",function(){
let value="#";
for(let i=0;i<6;i++){
  
  value +=hex[getRandomNumber()];
}
document.body.style.backgroundColor=value;
color.textContent=value;
})
function getRandomNumber()
{
  return Math.floor(Math.random()*hex.length);
}