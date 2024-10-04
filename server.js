const express = require ('express');
const app = express ();



let userList = [

    {name:"newa",
        age:20,},


        {name:"ney",
            age:20,},
]

app.get("/users",(req,res)=>{
    res.json (userList);
});









app.listen(5000, () => {
    console.log('Server listening at port 5000');

});

























// const http = require('http');
// const fs = require('fs');
// const _ = require('lodash');
// const readline = require('readline-sync');

// const totalQuizDuration = 30 * 1000; // 30 seconds for the entire quiz
// const questionDuration = 5 * 1000; // 5 seconds for each question
// let remainingQuizTime = totalQuizDuration;
// let score = 0;
// let currentQuestionIndex = 0;

// const questions = [
//     { question: "What is your name?", answer: "newa" },
    
//     { question: "Where do you tay'?", answer: "plk" }
// ];

// const quizTimer = setInterval(() => {
//     if (remainingQuizTime > 0) {
//         console.log(`Time left for the quiz: ${remainingQuizTime / 1000} seconds`);
//         remainingQuizTime -= 1000;
//     } else {
//         clearInterval(quizTimer);
//         console.log('Quiz time is up!');
//         displayFinalScore();
//     }
// }, 1000);

// const askQuestion = () => {
//     if (currentQuestionIndex < questions.length && remainingQuizTime > 0) {
//         const questionObj = questions[currentQuestionIndex];
//         console.log(`Question ${currentQuestionIndex + 1}: ${questionObj.question}`);

//         const questionTimer = setTimeout(() => {
//             console.log("Time's up for this question!");
//             currentQuestionIndex++;
//             askQuestion();
//         }, questionDuration);

//         const userAnswer = readline.question('Your answer: ');

//         clearTimeout(questionTimer); // Clear the question timer if answered
//         if (userAnswer.toLowerCase() === questionObj.answer.toLowerCase()) {
//             score++;
//             console.log('Correct!');
//         } else {
//             console.log(`Incorrect! The correct answer was ${questionObj.answer}.`);
//         }

//         currentQuestionIndex++;
//         askQuestion(); 
//     } else {
//         displayFinalScore();
//     }
// };

// const displayFinalScore = () => {
//     console.log(`Quiz finished! Your final score is: ${score}/${questions.length}`);
//     process.exit();
// };

// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/html');

//     let path = './views/';
//     switch (req.url) {
//         case '/':
//             path += 'index.html';
//             break;
//         case '/about':
//             path += 'about.html';
//             break;
//         default:
//             path += '404.html';
//             break;
//     }

//     fs.readFile(path, (err, data) => {
//         if (err) {
//             console.log(err);
//             res.writeHead(500, { 'Content-Type': 'text/plain' });
//             res.end('Internal Server Error');
//         } else {
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end(data);
//         }
//     });
// });

// server.listen(5000, () => {
//     console.log('Server listening at port 5000');
// //     console.log('Starting the quiz...');
// //     askQuestion();
// });
