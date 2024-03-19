var randomnumber1 = Math.floor(Math.random()*6)+1;

var randomdice="dice" + randomnumber1 + ".png";
var randomimageSource="images/" + randomdice;
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimageSource);



var randomnumber2 = Math.floor(Math.random()*6)+1;

var randomdice="dice" + randomnumber2 + ".png";
var randomimageSource="images/" + randomdice;
var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomimageSource);

if(randomnumber1<randomnumber2)
{
    document.querySelector("h1").innerHTML="player 2 win";
}
else if (randomnumber1>randomnumber2) {
    document.querySelector("h1").innerHTML="player 1 win";
} else {
    document.querySelector("h1").innerHTML="Draw";
}