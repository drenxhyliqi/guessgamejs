'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}




document.querySelector('.check').addEventListener
    ('click', function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);
        //When player does not insert a number
        if (!guess) {
            displayMessage('No Number was inserted !!!');


        //When player wins
        } else if (guess === secretNumber) {
            displayMessage('Correct Number !!!');
            //Adding style with DOM
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.number').style.width = '30rem';
             
            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        
            //When player's number is wrong
        } else if (guess !== secretNumber) { 
             if (score > 1) {
                 //When players guess is lower or higher than secretnumber!
                 displayMessage(guess > secretNumber ? "TOO HIGH" : 'TOO LOW');
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                displayMessage('You Lost');
                document.querySelector('.score').textContent = 0;
            }  
        }
    })

//Reseting the game with again button!    
    document.querySelector('.again').addEventListener('click', function () {
            score = 20;
            displayMessage('Start guessing...');
            document.querySelector('.score').textContent = score;
            document.querySelector('body').style.backgroundColor = '#222';
            document.querySelector('.guess').value = '';
            document.querySelector('.number').style.width = '15rem';
            document.querySelector('.number').textContent = '?';
            secretNumber = Math.trunc(Math.random() * 20) + 1;
            
    })
