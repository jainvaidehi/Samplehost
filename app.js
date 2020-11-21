const button = document.querySelector("button");

button.addEventListener('click', function()
{
 
const r =Math.floor(Math.random()*255 );
 
const g =Math.floor(Math.random()*255 );
 
const b =Math.floor(Math.random()*255 );
const rancolor=`rgb(${r},${g},${b})`;
document.body.style.backgroundColor = rancolor;
 document.querySelector('h1').innerText = rancolor;
})