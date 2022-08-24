//readline-sync
var readlineSync = require('readline-sync');

//to read username and store it

var userName = readlineSync.question("What is your Name ? ");

console.log("Welcome " + userName + " It is good to know you lets refresh our knowledge Are you excited!");
console.log("________________________")
var score = 0;
var highScore = 9;
//function
function historyQuiz(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Your answer " + answer + " is right.")
    score = score + 1;
    console.log("Your Score is : " + score)
    console.log('__________________________');
  } else {
    console.log("Oops! Your answer " + userAnswer + " is wrong")
    console.log("Your score is : " + score);
    console.log("Right answer is : " + answer)
    console.log('__________________________');
  }
}
//question inside array using object
var quiz = [{
  question: 'Q1. Where would you find the Konark Sun Temple? ', answer: "Orissa"
},
{
  question: 'Q2. In which state will you find Golghar, which is basically a large granary? ',
  answer: "Bihar"
},
{
  question: "Q3. which state will you find the natural urban beach called Marina Beach? ",
  answer: "Tamil Nadu"
},
{
  question: "Q4 .This magnificent piece of work called 'Jatayu's Earth Centre' can be found in which state? ",
  answer: "Kerala"
},
{
  question: 'Q5. Where would one find the famous Ranakpur Jain Temple? ',
  answer: "Rajasthan"
},
{
  question: "Q6. Ntangki National Park can be located in which beautiful state? ",
  answer: "Nagaland"
},
{
  question: "Q7. Where can one spot the beautiful landscape of Doodhpathri? ",
  answer: "Kashmir"
},
{
  question: "Q8. In which state will you find the massive hydroelectric project, Ranjit Sagar Dam? ",
  answer: "Punjab"
},
{
  question: "Q9. Dashashwamedh Ghat can be found in which state? ",
  answer: "Uttar Pradesh"
},
{
  question: "Q10. In which state will you find the Kanheri Caves which hold several Buddhist sculptures and relief carvings? ",
  answer: "Maharashtra"
}]

//for loop for taking quesion one by one 

for (var i = 0; i < quiz.length; i++) {
  currentQue = quiz[i].question;
  currentAns = quiz[i].answer;
  historyQuiz(currentQue, currentAns);
}


// if (score > highScore) {
//   console.log(" Highest score is " + highScore + " Your score is " + score + " Yayy!! You Have beaten the highest score Please share the screenshot.")
// }
// if (i >= quiz.length - 1) {
//   console.log("Your score is : " + score + " Highest score is : " + highScore)
// }

var bestScore = [{
  Name: "Imran",
  Score: 9
},
{
  Name: "Rahul Singh",
  Score: 8
}]
function checkscore() {
  console.log("Yay!!! you score  " + score)
  console.log("check out the high score if you beat please share a screenshot i will update")
}
checkscore();
function showScore(name, score) {
  console.log(name + ": " + score)
}
for (i = 0; i < bestScore.length; i++) {
  showScore(bestScore[i].Name, bestScore[i].Score)
}