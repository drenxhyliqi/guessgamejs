'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;



document.querySelector('.check').addEventListener
    ('click', function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);
        //When player does not insert a number
        if (!guess) {
            document.querySelector('.message').textContent = 'No Number was inserted !!!';


        //When player wins
        } else if (guess === secretNumber) {
            document.querySelector('.message').textContent = 'Correct Number !!!';
            //Adding style with DOM
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.number').style.width = '30rem';
             
            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
            


         //When player's number is greater than secret number
        } else if (guess > secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = "TOO HIGH";
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = 'You Lost';
                document.querySelector('.score').textContent = 0;
            }  
        }
            
            
        //When player's number is lower than secret number
         else if (guess < secretNumber) {
              if (score > 1) {
                document.querySelector('.message').textContent = "TOO LOW";
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = 'You Lost';
                document.querySelector('.score').textContent = 0;
            }
         }
        } 
)
//Reseting the game with again button!    
document.querySelector('.again').addEventListener('click', function () {
            score = 20;
            document.querySelector('.message').textContent = 'Start guessing...';
            document.querySelector('.score').textContent = score;
            document.querySelector('body').style.backgroundColor = '#222';
            document.querySelector('.guess').value = '';
            document.querySelector('.number').style.width = '15rem';
            document.querySelector('.number').textContent = '?';
            secretNumber = Math.trunc(Math.random() * 20) + 1;
    })
