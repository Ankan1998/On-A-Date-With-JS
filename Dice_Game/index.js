var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
document.querySelector(".img-dice1").setAttribute("src","images/dice"+randomNumber1+".png")
document.querySelector(".img-dice2").setAttribute("src","images/dice"+randomNumber2+".png")
