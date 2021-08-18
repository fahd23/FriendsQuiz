var readlineSync = require("readline-sync");
var chalk = require("chalk");
var score = 0;

var userName = readlineSync.question("Please tell me your Name?");

function capitalize(input) {
    var words = input.toLowerCase().split(' ');
    var CapitalizedWords = [];
    words.forEach(element => {
        CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));
    });
    return CapitalizedWords.join(' ');
}

console.log(chalk.cyan("Hello👋 " + capitalize(userName)));
console.log("----------------------");

var highScore = {
    name: "Fahd",
    points: "5"
}



function play(question, answer) {

    var userAnswer = readlineSync.question(question);

    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
        console.log(chalk.green("You Are Right😍"));
        score++;
    } else {
        console.log(chalk.red("You Are Wrong😣"));
        console.log("Correct answer is " + answer);
    }
    console.log("Your Score is " + score);
    console.log("----------------------");
}


var questions = [{
    question: `
  Where do i live(Enter the option)?
    a: Delhi
    b: Chennai
    c: cuddalore\n `,
    answer: "c"
}, {
    question: "What is my age?",
    answer: "21"
}, {
    question: `
  What is my Favorite Sport?
    a: Football
    b: Cricket
    c: Volleyball\n `,
    answer: "b"
}, {
    question: `
  Where i did my B.C.A
    a: Crescent
    b: VIT
    c: SSN\n `,
    answer: "a"
}, {
    question: "Do I know to drive Car(Yes/No)?",
    answer: "Yes"
}
];

for (var i = 0; i < questions.length; i++) {
    play(questions[i].question, questions[i].answer);
}

console.log(chalk.bgMagenta("Hooray! Your Score is " + score));

console.log(chalk.bgYellow("\nCheck out the High Scores:"));
console.log(chalk.green("\tName : " + highScore.name));
console.log(chalk.green("\tScore: " + highScore.points));

console.log(chalk.bgMagenta("If you beat this 👆 High Score,Please send me a screenshot"));
