var play=false;
var score;
var time;
var i;
var action;
var correctAnswer;
document.getElementById("start").onclick=function(){
  if (play == true) {
    loction.reload();
  }else {
    play=true;
    score=0;
    document.getElementById("start").innerHTML="Reset game"
    document.getElementById("scorevalue").innerHTML=score;
    document.getElementById("time").style.display="block";
    time=60;
    document.getElementById("timeremain").innerHTML=time;
    countdown();
    generateQA();
  }
}
for(i=1; i<5; i++){
      document.getElementById("b"+i).onclick = function(){
       if(playing == true){
      if(this.innerHTML == correctAnswer){
        score++;
  document.getElementById("scorevalue").innerHTML = score;
  document.getElementById("wrong").style.display="none";
  document.getElementById("correct").style.display="block";
    setTimeout(function(){
    document.getElementById("correct").style.display="none";
    }, 1000);
    generateQA();
    }else{
    document.getElementById("correct").style.display="none";
    document.getElementById("wrong").style.display="block";
    setTimeout(function(){
  document.getElementById("wrong").style.display="none";
  }, 1000);
  }
  }
  }
  }
function countdown(){
  action= setInterval(function () {
    time-=1;
    document.getElementById("timeremain").innerHTML=time;
    if(time == 0){
      stopcount();
      document.getElementById("gameover").style.display="block";
      document.getElementById("gameover").innerHTML="<p>game over</p><p>your score is </p>"+score+"<p>.</p>";
      document.getElementById("time").style.display="none";
      document.getElementById("correct").style.display="none";
      document.getElementById("wrong").style.display="none";
      play=false;
      document.getElementById("start").innerHTML="Start"
      generateQA();
    }
  },1000)
}
function stopcount() {
  clearInterval(action);
}
function generateQA(){
var x = 1+ Math.round(9*Math.random());
var y = 1+ Math.round(9*Math.random());
correctAnswer = x*y;
document.getElementById("numbox").innerHTML = x +
"x" + y;
var correctPosition = 1+ Math.round(3*Math.random());
document.getElementById("b"+correctPosition).innerHTML =
correctAnswer;
var answers = [correctAnswer];
for(i=1; i<5; i++){
if(i != correctPosition) {
var wrongAnswer;
do{
wrongAnswer = (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random()));
}while(answers.indexOf(wrongAnswer)>-1)
document.getElementById("b"+i).innerHTML =
wrongAnswer;
answers.push(wrongAnswer);
}
}
}
