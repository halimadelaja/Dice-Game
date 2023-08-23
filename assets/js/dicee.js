var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;//random number from 0-5
randomNumber1 = Math.floor(randomNumber1) + 1; //random number between 1-6
console.log(randomNumber1);
if (randomNumber1 === 1){
    document.querySelectorAll("img")[0].setAttribute("src", "assets/img/dice1.png"); //[0] because it is the same image we are changing
}else if(randomNumber1 === 2){
    document.querySelectorAll("img")[0].setAttribute("src", "assets/img/dice2.png");
}else if (randomNumber1 === 3){
    document.querySelectorAll("img")[0].setAttribute("src", "assets/img/dice3.png");
}else if(randomNumber1 === 4){
    document.querySelectorAll("img")[0].setAttribute("src", "assets/img/dice4.png");
}else if(randomNumber1 === 5){
    document.querySelectorAll("img")[0].setAttribute("src", "assets/img/dice5.png");
}else if(randomNumber1 === 6){
    document.querySelectorAll("img")[0].setAttribute("src", "assets/img/dice6.png");
}else{
    document.querySelectorAll("img")[0].setAttribute("src", "assets/img/dice6.png");
}

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //random number between 1-6
var imageReplacement = "assets/" + "img/" + "dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", imageReplacement);//[1] because it is the same image we are changing




if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw";
}else{
    document.querySelector("h1").innerHTML = "Refresh Me";
}
