alert("Hi");



var userClickedPattren=[];
var buttonColor =["red","blue","green","yellow"];
var gamePattren=[];

var started=false;
var level=0;






$(document).keypress(function(){
    if(!started){


        $("#level-title").text("Level "+ level);
        nextsequence();
        started= true;
    }
});





$(".btn").click(function() {
    var userChosenColor =$(this).attr("id");
    userClickedPattren.push(userChosenColor);
    AnimatePress(userChosenColor);
    playSound(userChosenColor);
   checkAnswer(userClickedPattren.length-1);


});




function checkAnswer(currentLevel){
//alert(userClickedPattren[currentLevel] );
//alert(gamePattren[currentLevel])
  if (userClickedPattren[currentLevel] === gamePattren[currentLevel]){

    console.log("success");


   if (userClickedPattren.length === gamePattren.length) {
      setTimeout(function () {
      nextsequence();
    },1000);
  }

}  else {
        console.log("Wrong");
        alert("wrong");
        playSound("wrong");
  //      lose();


      $('body').addClass("game-over");
        setTimeout (function(){
          $('body').removeClass("game-over");},200);

          $("h1").text("GAME OVER. press any key to restart");
          startover();

        }
      }







function nextsequence(){
//alert("sequence");
userClickedPattren=[];

level++;
$("#level-title").text("level "+level);



var randomNumber=(Math.floor(Math.random()*3)+1);
var randomchoosenColor=buttonColor[randomNumber];
gamePattren.push(randomchoosenColor);
$("#"+randomchoosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);



playSound(randomchoosenColor);
}





function startover(){
level=0;
gamePattren=[];
started=false;

    }





function playSound(name){
  alert("play");
  var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}



function AnimatePress(currentcolor){
    $("#"+currentcolor).addClass("pressed");
    setTimeout(function(){
      $("#"+currentcolor).removeClass("pressed");},100);
}
